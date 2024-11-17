const UserProfile = require("./UserSchema");
const express = require("express");
const router = express.Router();
require('dotenv').config();
const mongoose = require('mongoose');
const OpenAI = require('openai');
const axios = require('axios');
const vision = require('@google-cloud/vision');
const multer=require('multer')
const fs = require('fs')
const path=require('path')

const client = new vision.ImageAnnotatorClient();

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

router.post('/fileupload',upload.single('file'), async (req,res)=>{
  try{
    const filePath=req.file.path
    console.log(filePath)
    const result=await client.textDetection(filePath).catch(err => null);
    console.log(result)
    
    if (!result?.[0]?.textAnnotations?.[0]) return null;
  
    const text = result[0].textAnnotations[0].description.toLowerCase();
    const lines = text.split('\n');
    var finalamount = 0
    if (text.includes('withdraw') || text.includes('withdrawal')) {
      const amount = lines.find(line => 
        line.includes('$') && !line.includes('balance')
      )?.match(/\d+\.?\d*/)?.[0];
      
      finalamount = amount ? (-parseFloat(amount)).toFixed(2) : null;
  }
    else{
      const amountLine = lines.find(line => line.includes('amount'));
      if (amountLine) {
        const nextLine = lines[lines.indexOf(amountLine) + 1];
        const amount = nextLine?.match(/\d+\.?\d*/)?.[0];
        finalamount = amount ? parseFloat(amount).toFixed(2) : null;
      }
    }
  res.json({"amount":finalamount})}
  catch(error){
    console.error('OCR Error:', error);
  }
})


router.post('/', async (req, res) => {
    try {
        const { User } = req.body;
        
        if (!User || !User.PersonalInfo || !User.PersonalInfo.Email || !User.PersonalInfo.Password) {
            return res.status(400).json({ error: "Email and Password are required fields." });
        }
  
        const Userdata = await UserProfile.create({ User });
        res.status(200).json({ Userdata });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:email', async (req,res) => {
    const { email } = req.params
  
    const Userdata = await UserProfile.findOne({"User.PersonalInfo.email":email})
  
    if(!Userdata) {
      return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json(Userdata)
});

router.patch('/:email', async (req, res) => {
  try {
      const { email } = req.params;
      const { AccountInfo } = req.body;

      const updateData = {
          $set: {
              "User.AccountInfo.Deposit": AccountInfo.Deposit,
              "User.AccountInfo.Goal": AccountInfo.Goal,
              "User.AccountInfo.GoalAmount": AccountInfo.GoalAmount,
              "User.AccountInfo.CurrentAmount": AccountInfo.CurrentAmount
          }
      };

      const Userdata = await UserProfile.findOneAndUpdate(
          { "User.PersonalInfo.Email": email },
          updateData,
          { new: true }
      );

      if (!Userdata) {
          return res.status(404).json({ error: 'No such user' });
      }

      res.status(200).json({ success: true, Userdata });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

router.post('/chatbot',async (req,res)=>{
  const {email, userInput} =  req.body

  const Userdata = await UserProfile.findOne({"User.PersonalInfo.Email":email})
  //console.log(Userdata)
  console.log(Userdata)
  const chatHistory = Userdata.User.AccountInfo.History
  console.log(chatHistory)
  const headers = {
    'Authorization': `Bearer ${process.env.SAMBANOVA_APIKEY}`,
    'Content-Type': 'application/json'
  };
    try {
      const requestBody = {
        model: "Meta-Llama-3.1-8B-Instruct",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          ...chatHistory.length > 0 ? chatHistory : [{ role: "system", content: "This is the start of a new conversation." }],
          { role: "user", content: userInput }
        ],
        temperature: 0.7
        // max_tokens: 100
      };
      console.log('fine here')
      
      const response = await axios.post("https://api.sambanova.ai/v1/chat/completions", requestBody, { headers });
      console.log('Fine fine here')
      const completionText = response.data.choices?.[0]?.message?.content || 'No response';
      console.log(completionText)
      Userdata.User.AccountInfo.History.push({role:"user",content:userInput})
      Userdata.User.AccountInfo.History.push({role:"assistant",content:completionText})

      await Userdata.save()


      console.log('SambaNova Completion:', completionText);


      res.json({"botresponse":completionText})

  } catch (error) {
    console.error('Error with SambaNova API request:', error.response?.data || error.message);
  }



})

module.exports = router;
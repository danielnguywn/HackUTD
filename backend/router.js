const UserProfile = require("./UserSchema");
const express = require("express");
const router = express.Router();
require ('dotenv').config();
const mongoose = require('mongoose');
const OpenAI = require('openai')
const axios = require('axios')

const vision = require('@google-cloud/vision')

const client = new vision.ImageAnnotatorClient()
async function getTextfromImage (imagePath) {
  const [result] = await client.textDetection(imagePath);
  const detections = result.textAnnotations;
  if (detections.length > 0) {
    console.log('Detected Text:', detections[0].description);
  } else {
    console.log('No text found.');
  }
}
getTextfromImage('receipt.jpg')
// create user
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

// get single user
router.get('/:email', async (req,res) => {
    const { email } = req.params
  
    const Userdata = await UserProfile.findOne({"User.PersonalInfo.email":email})
  
    if( !Userdata) {
      return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json(Userdata)
  
  })


  //chatbot history
router.post('/chatbot',async (req,res)=>{
  const {email, userInput} =  req.body

  const Userdata = await UserProfile.findOne({"User.PersonalInfo.Email":email})
  //console.log(Userdata)

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
        temperature: 0.7, 
        max_tokens: 100
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
  


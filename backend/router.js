const UserProfile = require("./UserSchema");
const express = require("express");
const router = express.Router();
require ('dotenv').config();
const mongoose = require('mongoose');
const OpenAI = require('openai')
const axios = require('axios')


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

  const Userdata = await UserProfile.findOne({"User.PersonalInfo.email":email})

  const chatHistory = Userdata.AccountInfo.History

  const headers = {
    'Authorization': `Bearer ${process.env.SAMBANOVA_APIKEY}`,
    'Content-Type': 'application/json'
  };
    try {
      const requestBody = {
        model: "Meta-Llama-3.1-8B-Instruct",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          ...chatHistory,
          { role: "user", content: userInput }
        ],
        temperature: 0.7, 
        max_tokens: 100
      };
  
      
      const response = await axios.post("https://api.sambanova.ai/v1/chat/completions", requestBody, { headers });
  
      const completionText = response.data.choices?.[0]?.message?.content || 'No response';

      Userdata.AccountInfo.History.push({role:"user",content:userInput})
      Userdata.AccountInfo.History.push({role:"assistant",content:completionText})

      await Userdata.save()


      console.log('SambaNova Completion:', completionText);


      res.json({"botresponse":completionText})

  } catch (error) {
    console.error('Error with SambaNova API request:', error.response?.data || error.message);
  }



})



module.exports = router;
  


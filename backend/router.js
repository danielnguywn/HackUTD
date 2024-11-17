const OpenAI = require('openai')
const axios = require('axios')
const express=require('express')
const router=express.Router()

const headers = {
  'Authorization': `Bearer ${process.env.SAMBANOVA_APIKEY}`,
  'Content-Type': 'application/json'
};
const getCompletion = async (userPrompt) => {
  try {
    const requestBody = {
      model: "Meta-Llama-3.1-8B-Instruct",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7, 
      max_tokens: 100
    };

    
    const response = await axios.post("https://api.sambanova.ai/v1/chat/completions", requestBody, { headers });

    const completionText = response.data.choices?.[0]?.message?.content || 'No response';

    console.log('SambaNova Completion:', completionText);
    return completionText;

  } catch (error) {
    console.error('Error with SambaNova API request:', error.response?.data || error.message);
  }
};
const result = getCompletion("Give me some investment advice")
console.log(result)

module.exports=router
const UserProfile = require("./UserSchema");
const express = require("express");
const router = express.Router();
require('dotenv').config();
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

router.get('/:email', async (req,res) => {
    const { email } = req.params;
  
    console.log("Searching for email:", email);
  
    const Userdata = await UserProfile.findOne({
        $or: [
            {"User.PersonalInfo.Email": email},
            {"User.PersonalInfo.email": email}
        ]
    });
  
    if(!Userdata) {
        return res.status(404).json({error: 'No such user'});
    }
    
    console.log("Found user:", Userdata);
    res.status(200).json(Userdata);
});

router.patch('/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const { AccountInfo } = req.body;

        const updateData = {
            $set: {
                "User.AccountInfo.Occupation": AccountInfo.Occupation,
                "User.AccountInfo.Income": AccountInfo.Income,
                "User.AccountInfo.Deposit": AccountInfo.Deposit,
                "User.AccountInfo.Goal": AccountInfo.Goal,
                "User.AccountInfo.GoalAmount": AccountInfo.GoalAmount,
                "User.AccountInfo.CurrentDone": AccountInfo.CurrentDone
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

module.exports = router;
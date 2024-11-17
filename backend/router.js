const UserProfile = require("./UserSchema");
const express = require("express");
const router = express.Router();
require ('dotenv').config();
const mongoose = require('mongoose');


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


router.


module.exports = router;
  


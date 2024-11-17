const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    User:{
    PersonalInfo: {
        FirstName: {
            type: String, 
            required: true
        },
        LastName: {
            type: String, 
            required: true
        },
        Email: {
            type: String, 
            required: true
        },
        Password: {
            type: String, 
            required: true
        },
    },
    AccountInfo: {
        Occupation: {
            type: String, 
            //required: true
        },
        Income: {
            type: String, 
            //required: true
        },
        Deposit: {
            type: String, 
            //required: true
        },
        Goal: {
            type: String, 
            //required: true
        },
        GoalAmount: {
            type: String, 
            //required: true
        },
        CurrentDone: {
            type: String, 
            //required: true
        },
        History: [
            {
              role: {
                type: String,
                enum: ['user', 'assistant'],
                //required: true,
              },
              content: {
                type: String,
                //required: true,
              },
              timestamp: {
                type: Date,
                default: Date.now,
              },
            },
          ],
    },
}}, {timestamps: true});

module.exports = mongoose.model("UserProfile", UserSchema);
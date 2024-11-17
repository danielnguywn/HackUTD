const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    PersonalInfo: {
        FirstName: {type: String, required: true},
        LastName: {type: String, required: true},
        Email: {type: String, required: true},
    },
    AccountInfo: {
        Occupation: {type: String, required: true},
        Frequency: {type: String, required: true},
        Services: {type: String, required: true},
        IncomeMethod: {type: String, required: true},
        Savings: {type: String, required: true},
        Goal: {type: String, required: true},
        Budget: {type: String, required: true},
        Deposit: {type: String, required: true},
    }
}, {timestamps: true});

module.exports = mongoose.model("UserProfile", profileSchema);
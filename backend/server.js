const express=require('express')
require('dotenv').config()
const router=require('./router')
const mongoose = require('mongoose')

const app=express()

app.use(express.json())
app.use('/api/users', router);
const server = app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

const connectToMongoose = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
  }
};

connectToMongoose()
const express=require('express')
require('dotenv').config();

const mongoose = require('mongoose')

const app=express()

app.use(express.json())

const server = app.listen(process.env.PORT, () => {
  console.log('Server is running on port 4000');
});

console.log(process.env.MONGO_URI)

const connectToMongoose = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
  }
};

connectToMongoose()

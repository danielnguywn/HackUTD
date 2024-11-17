const express=require('express')
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose')

const app=express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())

const userRoutes = require("./router.js");
app.use('/api/users', userRoutes);

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
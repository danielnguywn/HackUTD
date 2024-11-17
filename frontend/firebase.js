import { initializeApp } from "firebase/app";
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain:  AUTH_DOMAIN,
  projectId:  PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
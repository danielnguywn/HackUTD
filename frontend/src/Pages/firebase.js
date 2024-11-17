import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebaseAPIKEY,
  authDomain: "hacktuah-4e89d.firebaseapp.com",
  projectId: "hacktuah-4e89d",
  storageBucket: "hacktuah-4e89d.firebasestorage.app",
  messagingSenderId: "482003823368",
  appId: "1:482003823368:web:e17bbea230774d0c959abd",
  measurementId: "G-1EWY5MWXFB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
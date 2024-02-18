// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfEkkAwcUNhxViKCdx0hNsyyUl7fPgehQ",
  authDomain: "expense-tracker-5b173.firebaseapp.com",
  projectId: "expense-tracker-5b173",
  storageBucket: "expense-tracker-5b173.appspot.com",
  messagingSenderId: "31039596646",
  appId: "1:31039596646:web:5ef178c42f03e2c4f5a5a7",
  measurementId: "G-WR0RG05QTG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

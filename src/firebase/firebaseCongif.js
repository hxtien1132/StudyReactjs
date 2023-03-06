// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRhzois9RnegFeH5MlIR6_l6x8zYk0s6U",
  authDomain: "data-hxt.firebaseapp.com",
  projectId: "data-hxt",
  storageBucket: "data-hxt.appspot.com",
  messagingSenderId: "257852288716",
  appId: "1:257852288716:web:e718d94abc3c465237dc69",
  measurementId: "G-S0G28SDJH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//init services
export const db = getFirestore(app)
export const auth = getAuth(app)

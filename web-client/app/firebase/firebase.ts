// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {apiKey} from "./keys";
import {getFunctions} from "firebase/functions";


const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "fragrance-tracker.firebaseapp.com",
    projectId: "fragrance-tracker",
    appId: "1:1040977709758:web:7593356f0ea007888e2cef",
    measurementId: "G-NTSJ6ZHTN6"
    };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const functions = getFunctions();
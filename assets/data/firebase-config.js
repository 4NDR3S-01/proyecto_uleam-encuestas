// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs9Mk2iGwNNYvgHXkB4kLcY6hbyNUgh5c",
  authDomain: "proyecto-uleam-7bdb0.firebaseapp.com",
  projectId: "proyecto-uleam-7bdb0",
  storageBucket: "proyecto-uleam-7bdb0.appspot.com",
  messagingSenderId: "223515009395",
  appId: "1:223515009395:web:298b1673709035396ba506",
  measurementId: "G-M0QJR8EB2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
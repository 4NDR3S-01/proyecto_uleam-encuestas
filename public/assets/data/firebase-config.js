// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7WOmee5p3dBtU6sTO3b-HrkqfDqzueRY",
  authDomain: "proyecto-uleam-william-c.firebaseapp.com",
  projectId: "proyecto-uleam-william-c",
  storageBucket: "proyecto-uleam-william-c.appspot.com",
  messagingSenderId: "250329933423",
  appId: "1:250329933423:web:034820ca53f5bdb9ec4f9a",
  measurementId: "G-B1XMNV7TML"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { db, auth };
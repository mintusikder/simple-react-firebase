// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSAEdq9XKbKXmPWUWl6jI8ziVcvnFJ2CI",
  authDomain: "simple-firebase-auth-b8b0f.firebaseapp.com",
  projectId: "simple-firebase-auth-b8b0f",
  storageBucket: "simple-firebase-auth-b8b0f.firebasestorage.app",
  messagingSenderId: "449617631318",
  appId: "1:449617631318:web:7abd7cc26bfa7f58ff83f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbOpaHwfxnkRGgQghR1A_tc8QvnnJmq58",
  authDomain: "auth-pass-54147.firebaseapp.com",
  projectId: "auth-pass-54147",
  storageBucket: "auth-pass-54147.firebasestorage.app",
  messagingSenderId: "594993745623",
  appId: "1:594993745623:web:e540a4ccb8b50d54232a92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
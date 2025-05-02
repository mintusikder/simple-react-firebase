// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmgr-eCyL4BMI5fk9Tm4XSb2i5qIN0qsI",
  authDomain: "dragon-news-ffd18.firebaseapp.com",
  projectId: "dragon-news-ffd18",
  storageBucket: "dragon-news-ffd18.firebasestorage.app",
  messagingSenderId: "932603905075",
  appId: "1:932603905075:web:9c2e3a063c88341b1dcf46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
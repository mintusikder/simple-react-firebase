// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLz93nek3-KabzdfVcFOlanG49dIld9Ms",
  authDomain: "explore-email-pass-auth-f45a6.firebaseapp.com",
  projectId: "explore-email-pass-auth-f45a6",
  storageBucket: "explore-email-pass-auth-f45a6.firebasestorage.app",
  messagingSenderId: "94821380980",
  appId: "1:94821380980:web:efc67feb901f272d993221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
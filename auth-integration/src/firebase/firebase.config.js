// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHQRy3O72QD5nL-MYFWLvS0KaDU7QgKgU",
  authDomain: "auth-integration-74c5a.firebaseapp.com",
  projectId: "auth-integration-74c5a",
  storageBucket: "auth-integration-74c5a.firebasestorage.app",
  messagingSenderId: "492110991753",
  appId: "1:492110991753:web:bfc9ef6adc28ff2848d158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const handelGoogleSignIn = () => {
    console.log("click");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>this is login</h2>
      <button onClick={handelGoogleSignIn}>Sign In With Google</button>
    </div>
  );
};

export default Login;

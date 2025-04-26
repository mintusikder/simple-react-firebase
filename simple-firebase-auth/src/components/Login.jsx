import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGitHubSignIn = () => {
    const gitProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const loginUser = result.user;
        const email = loginUser.email || loginUser.providerData[0]?.email || "No Email Found";
        setUser({
          displayName: loginUser.displayName,
          email: email,
          photoURL: loginUser.photoURL,
        });
      })
      .catch((error) => {
        console.error("GitHub Sign-In Error:", error);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        setUser({
          displayName: loginUser.displayName,
          email: loginUser.email,
          photoURL: loginUser.photoURL,
        });
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Sign-Out Error:", error);
      });
  };

  return (
    <div>
      <h2>This is Login</h2>
      {user ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
          <div>
            <h3>Name: {user.displayName}</h3>
            <p>Email: {user.email}</p>
            {user.photoURL && <img src={user.photoURL} alt="User Profile" width="100" />}
          </div>
        </div>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign In With Google</button>
          <button onClick={handleGitHubSignIn}>Sign In With GitHub</button>
        </>
      )}
    </div>
  );
};

export default Login;

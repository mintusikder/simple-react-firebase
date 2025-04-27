import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const condition = e.target.condition.checked;
    console.log(email, password);

    setErrorText("");
    setSuccess(false);

 
    if (!condition) {
      setErrorText("Please accept our condition");
      return;
    }
    // Password validation
    const upperCasePattern = /[A-Z]/;
    if (!upperCasePattern.test(password)) {
      setErrorText("Password must contain at least one uppercase letter.");
      return;
    }
    if (password.length < 6) {
      setErrorText("Password must be at least 6 characters long.");
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
        setErrorText(error.message);
      });
  };

  return (
    <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />

              <label className="label mt-4">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button type="submit" className="btn btn-neutral mt-6 w-full">
                Register
              </button>
            </fieldset>
            <label className="label">
              <input
                type="checkbox"
                name="condition"
                className="checkbox checkbox-sm"
              />
              Remember me
            </label>
            {errorText && (
              <p className="mt-4 text-red-500 text-center">{errorText}</p>
            )}
            {success && (
              <p className="mt-4 text-green-500 text-center">
                User created successfully!
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;

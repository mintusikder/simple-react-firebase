import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-18">
      <div className="card bg-base-100 w-full mx-auto py-8 max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">
          Register Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handelRegister} className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo Url"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already a member?{" "}
            <Link className="underline text-blue-500" to="/auth/login">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { use, useState } from "react";
import { Link} from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error ,setError] = useState("")
  const { loginUser } = use(AuthContext);

  const loginUserl = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user);

      })
      .catch((err) => {
        console.error("Login failed:", err.message);
        setError(err.message); // set error message string
      });
  };
  return (
    <div className="py-18">
      <div className="card bg-base-100 w-full mx-auto py-8 max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Login Your Account</h2>
        <div className="card-body">
          <form onSubmit={loginUserl} className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="text-red-500">{error}</p>
          <p className="mt-4 text-sm text-center">
            Not a member yet? {""}
            <Link className="underline text-blue-500" to="/auth/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

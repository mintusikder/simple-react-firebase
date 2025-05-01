import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const SocalLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn btn-outline">
        <FcGoogle size={24} />
        Login with Google
        </button>
        <button className="btn btn-outline">
          {" "}
          <FaGithub size={24} />
          Login with Github
        </button>
      </div>
      <h2 className="font-bold my-5">Find Us On</h2>
      <div className="join join-vertical flex flex-col">
        <button className="btn join-item justify-start bg-white">
          {" "}
          <FaFacebook size={24} />
          Facebook
        </button>
        <button className="btn join-item justify-start bg-white">
          <FaTwitter size={24} />
          Twitter
        </button>
        <button className="btn join-item justify-start bg-white">
          <FaInstagram size={24} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;

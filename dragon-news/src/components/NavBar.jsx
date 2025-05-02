import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinkStyles = ({ isActive }) =>
    `px-2 transition-all duration-300 ease-in-out 
     hover:underline hover:decoration-red-500 hover:underline-offset-4  ${
       isActive ? "font-bold text-red-500 underline underline-offset-4" : ""
     }`;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center lg:flex">
        <ul className="flex gap-3 text-accent">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyles}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={navLinkStyles}>
              News
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
        <>
        <img className="w-12 rounded-full" src={`${user ? user. photoURL : ""}`} alt="" />
        {user.email}
        {user.displayName}
          <button onClick={handelLogOut} className="btn btn-primary">
            LogOut
          </button>
        </>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

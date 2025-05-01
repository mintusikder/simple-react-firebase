import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const now = new Date(); // ✅ Define 'now' here
  const weekday = format(now, "iiii");
  const rest = format(now, "LLLL dd, yyyy");

  return (
    <div className="flex justify-center gap-3 flex-col items-center py-8">
      <img className="w-[350px]" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent">
        <strong className="font-semibold">{weekday}</strong>, {rest}
      </p>
    </div>
  );
};

export default Header;

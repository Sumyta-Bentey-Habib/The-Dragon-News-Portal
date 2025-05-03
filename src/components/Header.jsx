import React from "react";
import logo from "../assets/images/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-3 ">
        <img className="w-[400px]" src={logo} alt="" srcset="" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE,MMMM MM,yyyy")}</p>
      </div>
    </>
  );
};

export default Header;

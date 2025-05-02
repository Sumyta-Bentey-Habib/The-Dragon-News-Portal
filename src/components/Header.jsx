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
      <div className="flex justify-center  items-center w-11/12 m-2.5 " >
        <button className="btn btn-secondary p-2">Latest</button>
        <Marquee pauseOnHover>
        I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
    </>
  );
};

export default Header;

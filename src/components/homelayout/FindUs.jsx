import React from 'react';
import { SiFacebook } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold ">Find us on</h2>
            <div>
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100 join-item justify-start">
    <SiFacebook></SiFacebook>
    FaceBook</button>
  <button className="btn bg-base-100 join-item justify-start">
    < IoLogoTwitter ></IoLogoTwitter>
    Twitter</button>
  <button className="btn bg-base-100 join-item justify-start">
    <LuInstagram></LuInstagram>
    Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;
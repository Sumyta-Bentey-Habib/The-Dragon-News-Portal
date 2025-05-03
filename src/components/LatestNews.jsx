import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex justify-center items-center w-11/12 m-2.5  bg-base-200 gap-2" >
        <button className="btn btn-secondary p-2">Latest</button>
        <Marquee pauseOnHover>
        I can be a React component, multiple React components, or just some text.
        ||  I can be a React component, multiple React components, or just some text.
        ||  I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
    );
};

export default LatestNews;
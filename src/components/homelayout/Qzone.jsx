import React from 'react';
import swimmingImage from "../../assets/images/swimming.png";
import classImage from "../../assets/images/class.png";
import playImage from "../../assets/images/playground.png";



const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
           <h2 className="font-bold mb-5"> Qzone</h2>
           <div className='space-y-6'>
            <img src={swimmingImage} alt="" srcset="" />
            <img src={classImage} alt="" srcset="" />
            <img src={playImage} alt="" srcset="" />
           </div>
        </div>
    );
};

export default Qzone;
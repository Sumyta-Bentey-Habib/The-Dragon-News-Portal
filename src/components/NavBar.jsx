import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/images/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
           <div className=''></div>
           <div className='nav flex gap-2.5 text-accent'> 
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
           </div>
           <div className="login-btn flex gap-2.5">
            <img src={user} alt="" srcset="" />
            <button className='btn btn-primary px-10'>Login</button>
           </div>
        </div>
    );
};

export default NavBar;
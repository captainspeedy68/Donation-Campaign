import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location  = useLocation();
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src="/Logo.png" alt="" />
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="flex-none">
                <ul className=" menu-horizontal px-1 flex justify-between">
                    <li><NavLink to={"/"} className={`m-5 active-link ${location.pathname === "/" ? "text-[#FF444A] underline" : ""}`}>Home</NavLink></li>
                    <li><NavLink to={"/donation"} className={`m-5 active-link ${location.pathname === "/donation" ? "text-[#FF444A] underline" : ""}`}>Donation</NavLink></li>
                    <li><NavLink to={"/statistics"} className={`m-5 active-link ${location.pathname === "/statistics" ? "text-[#FF444A] underline" : ""}`}>Statistics</NavLink></li>
                    {/* <li><a>Link 2</a></li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;
import React from "react";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img className="ieee-logo-white" alt="IEEE Logo White" src="IEEE-logo-white.png" />
            <div className="frame">
                <div className="text-wrapper">Home</div>
                <div className="text-wrapper">Contact</div>
            </div>
            <div className="div-wrapper">
                <div className="text-wrapper">Login</div>
            </div>
        </div>
    );
};

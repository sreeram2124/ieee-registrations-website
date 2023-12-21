/* src/components/Footer/index.jsx */

import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="frame">
                <img className="IEEE-SRM-SB" alt="Ieee SRM SB" src="IEEE-SRM-SB-1.png" />
                <div className="div">
                    <div className="div-2">
                        <div className="text-wrapper">Home</div>
                        <div className="text-wrapper">Contact</div>
                        <div className="text-wrapper">Login</div>
                    </div>
                    <div className="div-2">
                        <div className="text-wrapper">LinkedIn</div>
                        <div className="text-wrapper">Facebook</div>
                        <div className="text-wrapper">Instagram</div>
                        <div className="text-wrapper">Github</div>
                    </div>
                    <div className="div-2">
                        <div className="text-wrapper">Privacy Policy</div>
                        <div className="text-wrapper">Terms &amp; Conditions</div>
                    </div>
                </div>
            </div>
            <p className="p">© 2023 IEEE SRM. All Rights Reserved.</p>
        </div>
    );
};

import React from "react";
import "./RegistrationForm.css";

export const RegistrationForm = () => {
    return (
        <div className="registration-form">
            <div className="frame-wrapper">
                <div className="frame-wrapper">
                    <div className="frame">
                        <div className="text-wrapper">Embark on an Adventure</div>
                        <p className="div">
                            Seize the Opportunity to Learn, Connect, and Innovate — Secure Your Spot Today!
                        </p>
                    </div>
                </div>
            </div>
            <div className="div-2">
                <div className="frame-2">
                    <div className="frame-3">
                        <div className="text-wrapper-2">Name</div>
                        <img className="line" alt="Line" src="/assets/Line.svg" />
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Registration Number</div>
                        <img className="line" alt="Line" src="/assets/Line.svg" />
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Email</div>
                        <img className="line" alt="Line" src="/assets/Line.svg" />
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Contact No.</div>
                        <img className="line" alt="Line" src="/assets/Line.svg" />
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Department</div>
                        <img className="line" alt="Line" src="/assets/Line.svg" />
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Section</div>
                        <img className="line" alt="Line" src="/assets/Line.svg" />
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">Faculty Advisor</div>
                        <img className="line" alt="Line" src="/assets/Line.svg" />
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-3">Register Now</div>
                </div>
            </div>
        </div>
    );
};

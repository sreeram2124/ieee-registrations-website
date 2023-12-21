// src/components/HeroSection/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

export const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="frame">
                <div className="div">
                    <p className="text-wrapper">Welcome to IEEE SRM Event Registration</p>
                    <p className="p">Unlock Exclusive Access to Exciting Events and Workshops</p>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-2">Register Now</div>
                </div>
            </div>
            <div className="HeroSectionImage">
                <img src="/assets/HeroSection_Image.png" alt="Hero Section Image" />
            </div>
        </div>
    );
};

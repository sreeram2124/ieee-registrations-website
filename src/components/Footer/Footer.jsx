import React from "react";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Social Media</h3>
                        <ul>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 IEEE SRM. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
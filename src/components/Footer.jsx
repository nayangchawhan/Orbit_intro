import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content animate-on-scroll">
                    <div className="footer-logo">
                        <span className="logo-wave">Wave</span>
                        <span className="logo-plus">+</span>
                        <span className="logo-orbit">Orbit</span>
                    </div>
                    <p className="footer-tagline">Redefining Intelligent Infrastructure.</p>
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Automattrix. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

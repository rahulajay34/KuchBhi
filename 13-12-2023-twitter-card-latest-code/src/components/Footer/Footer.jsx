import React from 'react';
import './footer.css'; // Add your own CSS file for styling
import logo from "../../assets/lightLogo.webp"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="https://www.seohorizon.com/cookie-policy/">Cookie Policy</a></li>
                    <li><a href="https://www.seohorizon.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="https://www.seohorizon.com/terms-conditions/">Terms and Conditions</a></li>
                    <li><a href="https://www.seohorizon.com/terms-use/">Terms of Use</a></li>
                    <li><a href="https://www.seohorizon.com/ftc-disclosure/">FTC Disclosure</a></li>
                </ul>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2023 SEO Horizon. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

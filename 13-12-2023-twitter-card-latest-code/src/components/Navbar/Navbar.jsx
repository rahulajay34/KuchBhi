import React, { useEffect, useState } from 'react';
import "./navbar.css";
import logo from "../../assets/logo.webp";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <a href="https://seohorizon.com"><img className="logo" src={logo} alt="SEO Horizon Twitter Debugger" /></a>
            </div>
        </nav>
    );
}

export default Navbar;

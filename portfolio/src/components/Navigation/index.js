import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav>
            <ul className="nav-links">
                <li className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
                    <Link to="/" className="nav-link">
                        About Me
                    </Link>
                </li>
                <li className={location.pathname === "/portfolio" ? "nav-item active" : "nav-item"}>
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>
                </li>
                <li className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </li>
                <li className={location.pathname === "/resume" ? "nav-item active" : "nav-item"}>
                    <Link to="/resume" className="nav-link">
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
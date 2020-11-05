import React from 'react';
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

// const resume = [resume];

function Navbar() {

    const location = useLocation();

    return (
        <>
        <nav className="navbar navbar-expand-xl navigation navbar-dark">
            <Link 
            to="/" className="navbar-brand" href={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Ryan Flanagan
            </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto navbarelements">
                    <li className="nav-item active">
                        <Link 
                        to="/about" className="nav-link" href={location.pathname === "/about" ? "nav-link active" : "nav-link"} tabindex="-1" aria-disabled="true">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        to="/resume" className="nav-link" href={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        to="/portfolio" className="nav-link" href={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        to="/contact" className="nav-link" href={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;

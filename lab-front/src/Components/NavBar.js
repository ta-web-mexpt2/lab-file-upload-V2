import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css";

const NavBar = () => {
    const algo = () => {
        console.log("Algo...");
    }
    return (
        <div className="page__section">
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <ol className="breadcrumb__list r-list">
                    <li className="breadcrumb__group">
                        <Link to="/" className="breadcrumb__point r-link">Home</Link>
                        <span className="breadcrumb__divider" aria-hidden="true">|</span>
                    </li>
                    <li className="breadcrumb__group">
                        <Link to="/" className="breadcrumb__point r-link" uk-toggle="target: #offcanvas-flip">New Post [ + ]</Link>
                        <span className="breadcrumb__divider" aria-hidden="true">|</span>
                    </li>
                    <li className="breadcrumb__group">
                        <Link to="/login" className="breadcrumb__point r-link" >Login</Link>
                        <span className="breadcrumb__divider" aria-hidden="true">|</span>
                    </li>
                    <li className="breadcrumb__group">
                        <Link to="/signup" className="breadcrumb__point r-link">Signup</Link>
                    </li>
                </ol>
            </nav>
        </div>
    )
};

export default NavBar;
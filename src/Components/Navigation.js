import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ variant }) => {
    let classNames = "flex";

    if (variant === "header") {
        classNames += " flex-row justify-between space-x-4";
    } else if (variant === "footer") {
        classNames += " flex-col text-left items-start align-start";
    }

    return (
        <nav className={classNames}>
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600">Our Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600">Contact Us</Link>
        </nav>
    );
};

export default Navigation;

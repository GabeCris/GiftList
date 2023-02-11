import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, url = "#" }) => {
    return (
        <button className="layout-button">
            <Link to={url !== "#" ? "/" + url : url}>{label}</Link>
        </button>
    );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";
import { LogoutIcon } from "../Icons";

const Button = ({ label, url = "#", logout, ...props }) => {
    return (
        <button
            {...props}
            className="layout-button"
            onClick={()=> window.location.href = url}
        >
            {label}
            {logout && <LogoutIcon />}
        </button>
    );
};

export default Button;

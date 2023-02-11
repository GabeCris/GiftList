import React from "react";
import { Link } from "react-router-dom";
import { LogoutIcon } from "../Icons";

const Button = ({ label, url = "#", logout }) => {
    return (
        <button className="layout-button">
            <Link to={url !== "#" ? "/" + url : url}>{label}</Link>
            {logout && <LogoutIcon />}
        </button>
    );
};

export default Button;

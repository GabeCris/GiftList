import React from "react";
import { LogoutIcon } from "../Icons";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const Button = ({
    label,
    url = "#",
    logout,
    isLoading,
    secondary,
    ...props
}) => {
    const navigate = useNavigate();
    return (
        <button
            {...props}
            className={`layout-button ${
                secondary && "layout-button-secondary"
            }`}
            onClick={() => navigate(url)}
        >
            {isLoading ? <Spinner /> : label}
            {logout && <LogoutIcon />}
        </button>
    );
};

export default Button;

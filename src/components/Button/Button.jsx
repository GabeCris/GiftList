import React from "react";
import { LogoutIcon } from "../Icons";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const Button = ({
    label,
    url = "#",
    icon,
    isLoading,
    secondary,
    external,
    children,
    ...props
}) => {
    const navigate = useNavigate();
    return (
        <button
            className={`layout-button ${
                secondary && "layout-button-secondary"
            }`}
            onClick={() =>
                !external ? navigate(url) : window.open(url, "_blank")
            }
            {...props}
        >
            {isLoading ? <Spinner /> : label}
            {icon && children}
            {/* {logout && <LogoutIcon />} */}
        </button>
    );
};

export default Button;

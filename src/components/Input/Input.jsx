import React from "react";

function Input(props) {
    return (
        <div className={"inputContainer"}>
            <label htmlFor={props.name} className={"inputLabel"}>
                {props.name}
            </label>
            <input className={"input"} id={props.name} {...props} />
        </div>
    );
}

export default Input;

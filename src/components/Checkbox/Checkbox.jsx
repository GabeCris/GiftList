import React from "react";
import { useModal } from "../../contexts/ModalContext";

const Checkbox = (props) => {
    const { changeModal } = useModal();

    return (
        <label className="shelfProductCheckbox">
            <input {...props} type="checkbox" onChange={(e)=> e.target.checked && changeModal()} />
        </label>
    );
};

export default Checkbox;

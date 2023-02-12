import React, { useState, useCallback } from "react";
import Modal from "../../components/Modal";

import { ModalContext } from "./ModalContext";

function ModalProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
   
    const changeModal = useCallback(() => {
        setShowModal(!showModal);
        console.log("ABRIU", showModal)
    }, [showModal]);
    
    return (
        <ModalContext.Provider
            value={{
                changeModal, 
                showModal
            }}
        >
            <Modal/>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;

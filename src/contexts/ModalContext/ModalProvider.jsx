import React, { useState, useCallback } from "react";
import Modal from "../../components/Modal";

import { ModalContext } from "./ModalContext";

function ModalProvider({ children }) {
    const [showModal, setShowModal] = useState(false);
     const [buildModal, setBuildModal] = useState('');
   
    const changeModal = useCallback((data) => {
        setBuildModal(data);
        setShowModal(!showModal);
    }, [showModal, buildModal]);
    
    return (
        <ModalContext.Provider
            value={{
                changeModal, 
                showModal
            }}
        >
            <Modal buildModal={buildModal}/>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;

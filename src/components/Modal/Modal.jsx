import React, { useState, useEffect } from "react";
import { useModal } from "../../contexts/ModalContext";
import useReserve from "../../hooks/useReserve/useReserve";
import { ModalList } from "./ModalList";

const Modal = ({ buildModal }) => {
    const { showModal, changeModal } = useModal();
    const [modalContent, setModalContent] = useState();
    const { changeReserve } = useReserve();

    useEffect(() => {
        setModalContent(ModalList?.find((item) => item?.status === buildModal));
    }, [buildModal, showModal]);

    const changeButton = () => {
        switch (buildModal) {
            case "reserve":
                return (
                    <button
                        className="layout-button"
                        // onClick={() => window.location.reload()}
                        onClick={changeModal}
                    >
                        Entendi
                    </button>
                );
            case "registered":
                return (
                    <button className="layout-button" onClick={changeModal}>
                        Entendi
                    </button>
                );
            case "cancelReserve":
                return (
                    <button className="layout-button" onClick={changeModal}>
                        Entendi
                    </button>
                );
        }
    };

    return showModal ? (
        <div className="layout-modal">
            <div className="layout-modal-box">
                <h3 className="layout-modal-title">{modalContent?.title}</h3>
                <p className="layout-modal-text">{modalContent?.text}</p>
                {changeButton()}
            </div>
        </div>
    ) : null;
};

export default Modal;

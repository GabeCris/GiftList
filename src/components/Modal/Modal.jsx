import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import useReserve from "../../hooks/useReserve/useReserve";
import { ModalList } from "./ModalList";

const Modal = ({ buildModal }) => {
    const { showModal, changeModal } = useModal();
    const [modalContent, setModalContent] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setModalContent(ModalList?.find((item) => item?.status === buildModal));
    }, [buildModal, showModal]);

    const changeButton = () => {
        switch (buildModal) {
            case "reserve":
                return (
                    <button
                        className="layout-button"
                        onClick={() => window.location.reload()}
                    >
                        Entendi
                    </button>
                );

            case "cancelReserve":
                return (
                    <button
                        className="layout-button"
                        onClick={() => window.location.reload()}
                    >
                        Entendi
                    </button>
                );
            case "deleteReserve":
                return (
                    <button
                        className="layout-button"
                        onClick={() => {
                            navigate("/edit");
                            changeModal();
                        }}
                    >
                        Entendi
                    </button>
                );
            case "userRegistration":
                return (
                    <button
                        className="layout-button"
                        onClick={() => {
                            navigate("/user");
                            changeModal();
                        }}
                    >
                        Entendi
                    </button>
                );
            default:
                return (
                    <button
                        className="layout-button"
                        onClick={() => {
                            navigate("/edit");
                            changeModal();
                        }}
                    >
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

import React, { useState, useEffect } from "react";
import { useModal } from "../../contexts/ModalContext";
import { ModalList } from "./ModalList";

const Modal = ({buildModal}) => {
    const { showModal, changeModal } = useModal();
    const [modalContent, setModalContent] = useState();

    useEffect(() => {
    setModalContent(ModalList?.find((item) => item?.status === buildModal));
    console.log(buildModal, "buildmodal")
  }, [buildModal, showModal]);

    return showModal ? (
        <div className="layout-modal">
            <div className="layout-modal-box">
                <h3 className="layout-modal-title">{modalContent?.title}</h3>
                <p className="layout-modal-text">
                    {modalContent?.text}
                </p>
                <button className="layout-button" onClick={changeModal}>
                    Entendi
                </button>
            </div>
        </div>
    ) : null;
};

export default Modal;

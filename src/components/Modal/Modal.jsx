import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import { ModalList } from "./ModalList";

const Modal = () => {
  const { modal, closeModal } = useModal();
  const { title, text, onlyButton, action } =
    ModalList?.find((item) => item?.action == modal?.action) ?? {};

  const handleButtonClick = () => {
    if (modal.onButtonClick) {
      modal.onButtonClick();
    }

    closeModal();
  };

  const renderHTML = (html) => ({ __html: html });

  return modal ? (
    <div className="layout-modal">
      <div className="layout-modal-box">
        <h3 className="layout-modal-title">{title}</h3>
        <p
          className="layout-modal-text"
          dangerouslySetInnerHTML={renderHTML(text)}
        />
        {onlyButton ? (
          <button className="layout-button" onClick={handleButtonClick}>
            {action === "shipping-info"
              ? "Copiar CEP"
              : action === "pix-info"
              ? "Copiar CPF"
              : "Entendi"}
          </button>
        ) : (
          <p className="layout-modal-buttons">
            <button
              className="layout-button layout-button-secondary"
              onClick={closeModal}
            >
              Não
            </button>
            <button className="layout-button" onClick={handleButtonClick}>
              Sim
            </button>
          </p>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;

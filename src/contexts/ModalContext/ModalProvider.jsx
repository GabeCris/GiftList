import React, { useState, useCallback } from "react";
import Modal from "../../components/Modal";

import { ModalContext } from "./ModalContext";

function ModalProvider({ children }) {
  const [modal, setModal] = useState(null);

  const openModal = (action, onButtonClick) => {
    setModal({
      action,
      onButtonClick,
    });
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

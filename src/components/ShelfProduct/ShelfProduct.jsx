import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import useReserve from "../../hooks/useReserve/useReserve";
import formatPrice from "../../utils/formatPrice/FormatPrice";

import Button from "../Button";
import { GiftIcon, GiftOpenIcon } from "../Icons";
import { useUser } from "../../contexts/UserContext";

const ShelfProduct = ({ props }) => {
  const { changeModal } = useModal();
  const { changeReserve } = useReserve();
  const userId = localStorage.getItem("userId");

  const checkUserId = () => {
    return props.userId === userId;
  };

  //   console.log(props);

  //   console.log(userId, "<<<<<<<<<<,ID DE USUARIO");
  const changeButton = () => {
    switch (props.productStatus || props.status) {
      case "available":
        return (
          <Button label="Ver no site" external={true} url={props.productUrl} />
        );
      case "unavailable":
        return <Button label="Reservado" />;
    }
  };

  const changeGiftIcon = () => {
    switch (props.productStatus || props.status) {
      case "available":
        return (
          <div
            className="giftBox giftBoxAnimated"
            onClick={() => makeReserve()}
          >
            <GiftOpenIcon />
          </div>
        );
      default:
        return (
          <div className="giftBox">
            <GiftIcon />
          </div>
        );
    }
  };

  const makeReserve = () => {
    changeModal(
      "reserve",

      changeReserve(userId, props.id, "unavailable")
    );
  };

  const cancelReserve = () => {
    changeModal("cancelReserve");
    changeReserve("", props.id, "available");
  };

  return (
    <div
      className={`shelfProduct ${
        !checkUserId()
          ? "shelfProduct-" + props.productStatus
          : "shelfProduct-reserved"
      }`}
    >
      {changeGiftIcon()}
      <div className="shelfProduct-box-image">
        <img
          src={props.productUrlImage}
          className="shelfProduct-image"
          alt={props.productName}
        />
      </div>
      <h2 className="shelfProduct-name">{props.productName}</h2>
      <p className="shelfProduct-price">{formatPrice(props.productPrice)}</p>
      {checkUserId("500") ? (
        <Button label="Não" onClick={() => cancelReserve()} />
        ) : (
        <Button label="cancelar" onClick={() => cancelReserve()} />
      )}
    </div>
  );
};

export default ShelfProduct;

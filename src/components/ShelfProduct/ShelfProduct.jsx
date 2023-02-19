import React, { useEffect, useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import useReserve from "../../hooks/useReserve/useReserve";
import formatPrice from "../../utils/formatPrice/FormatPrice";

import Button from "../Button";
import { GiftIcon, GiftOpenIcon } from "../Icons";

const ShelfProduct = ({ props }) => {
    const { changeModal } = useModal();
    const { changeReserve } = useReserve();

    const checkUserId = (userId) => {
        return props.userId === userId;
    };

    console.log(props.id);
    const changeButton = () => {
        switch (props.productStatus || props.status) {
            case "available":
                return (
                    <Button
                        label="Ver no site"
                        external={true}
                        url={props.productUrl}
                    />
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
        changeModal("reserve");
        changeReserve("500", props.id, "unavailable");
    };

    const cancelReserve = () => {
        changeModal("cancelReserve");
        changeReserve("", props.id, "available");
        console.log("CANCELOU")
    };

    return (
        <div
            className={`shelfProduct ${
                !checkUserId("500")
                    ? "shelfProduct-" + props.productStatus
                    : "shelfProduct-reserved"
            }`}
        >
            {changeGiftIcon()}
            <div className="shelfProduct-box-image">
                <img
                    src={props.productUrlImage}
                    className="shelfProduct-image"
                />
            </div>
            <h2 className="shelfProduct-name">{props.productName}</h2>
            <p className="shelfProduct-price">
                {formatPrice(props.productPrice)}
            </p>
            {checkUserId("500") ? (
                <Button label="cancelar" onClick={() => cancelReserve()} />
            ) : (
                changeButton()
            )}
        </div>
    );
};

export default ShelfProduct;

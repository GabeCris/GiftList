import React from "react";
import { EditIcon, GiftIcon, GiftOpenIcon } from "../Icons";

const ShelfEdit = ({ props }) => {
    const changeGiftIcon = () => {
        switch (props.productStatus || props.status) {
            case "available":
                return (
                    <div className="giftBox">
                        <GiftOpenIcon />
                    </div>
                );
            default:
                return (
                    <div className="giftBox giftBox-unavailable">
                        <GiftIcon />
                    </div>
                );
        }
    };
    console.log(props);
    return (
        <section className="shelfEdit">
            {changeGiftIcon()}
            <div className="shelfEditImage">
                <div className="icon-edit">
                    <EditIcon />
                </div>
                <img src={props.productUrlImage} alt="" />
            </div>
            <div className="shelfEditContent">
                <h3 className="shelfEditName">{props.productName}</h3>
                {props.productStatus == "unavailable" && (
                    <p className="shelfEditUser">[Nome do usuário]</p>
                )}
            </div>
        </section>
    );
};

export default ShelfEdit;

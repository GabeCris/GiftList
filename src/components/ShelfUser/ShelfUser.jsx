import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiftIcon, GiftOpenIcon, ShareIcon } from "../Icons";

const ShelfEdit = ({ id, products, userName, pinCode }) => {
    const navigate = useNavigate();
    const [productName, setProductName] = useState();

    useEffect(() => {
        setProductName(
            products
                ?.filter((item) => item?.userId == id)
                .map((item) => item.productName)
        );
    }, []);

    return (
        <section className="shelfUser" onClick={() => navigate(`/user/${id}`)}>
            {productName == "" ? (
                <div className="giftBoxUser">
                    <GiftOpenIcon />
                </div>
            ) : (
                <div className="giftBoxUser giftBox-unavailable">
                    <GiftIcon />
                </div>
            )}
            <div className="shelfEditContent">
                <h3 className="shelfEditName">{userName}</h3>
                <p className="shelfEditUser">{productName}</p>
            </div>
            <a
                target={"_blank"}
                href={`https://wa.me/?text=D%C3%AA%20uma%20olhadinha%20na%20nossa%20lista%20de%20presentes!%0A%0ASeu%20nome%20de%20usu%C3%A1rio%3A%20*${userName}*%0ASeu%20c%C3%B3digo%20de%20acesso%3A%20*${pinCode}*%0A%0Ahttps%3A%2F%2Flista-bruna-gabriel.netlify.app%2F%23${userName.toLowerCase().replace(" ", "_")}`}
            >
                <ShareIcon />
            </a>
        </section>
    );
};

export default ShelfEdit;

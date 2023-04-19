import React from "react";
import { useNavigate } from "react-router-dom";
import { EditIcon, GiftIcon, GiftOpenIcon } from "../Icons";

const ShelfEdit = ({ product, user }) => {
  const { userName } = user?.find((user) => user.id === product.userId) ?? {};

  //   console?.log(product);
  console?.log(userName);
  const navigate = useNavigate();
  const changeGiftIcon = () => {
    switch (product.productStatus || product.status) {
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
  return (
    <section
      className="shelfEdit"
      onClick={() => navigate(`/edit/${product.id}`)}
    >
      {changeGiftIcon()}
      <div className="shelfEditImage">
        <div className="icon-edit">
          <EditIcon />
        </div>
        <img src={product.productUrlImage} alt="" />
      </div>
      <div className="shelfEditContent">
        <h3 className="shelfEditName">{product.productName}</h3>
        {product.productStatus == "unavailable" && (
          <p className="shelfEditUser">{userName}</p>
        )}
      </div>
    </section>
  );
};

export default ShelfEdit;

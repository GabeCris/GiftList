import React from "react";
import { useUser } from "../../contexts/UserContext";

const ShelfHistory = ({ props }) => {
  const adminNames = ["Gabriel Crisanto", "Bruna Kailane"];

  return (
    !adminNames.includes(props?.userName) && (
      <div className="shelfHistory">
        <h3>{props?.userName}</h3>
        <p>
          {props?.date} - {props?.hour}
        </p>
      </div>
    )
  );
};

export default ShelfHistory;

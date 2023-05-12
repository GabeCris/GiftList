import React from "react";

const ShelfHistory = ({ props }) => {
  const adminNames = ["Gabriel Crisanto", "Bruna Kailane"];

  return (
    <div className="shelfHistory">
      <h3>{props?.userName}</h3>
      <p>
        {props?.date} - {props?.hour}
      </p>
    </div>
  );
};

export default ShelfHistory;

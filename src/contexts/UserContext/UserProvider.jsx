import React, { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [userId, setUserId] = useState("");
  const clearData = () => {
    setUserName("");
    setPinCode("");
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        pinCode,
        setPinCode,
        userId,
        setUserId,
        clearData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

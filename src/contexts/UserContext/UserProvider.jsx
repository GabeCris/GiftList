import React, { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        pinCode,
        setPinCode,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

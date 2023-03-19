import React, { useState } from "react";
import { UserContext } from "./UserContext";

function UserProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [pinCode, setPinCode] = useState("");

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        pinCode,
        setPinCode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

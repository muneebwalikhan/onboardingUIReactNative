import React, { createContext } from "react";

export const UserContext = createContext();

const UseContextHook = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        userdata: {
          name: "muneeb",
          email: "muneeb@khan",
          age: 23,
          address: "karachi",
          phone: "03123456789",
          country: "pakistan",
          city: "karachi",
          state: "sindh",
          zip: "12345",
          street: "12345",
        },
        userdata2: {
          name: "muneeb2",
          email: "muneeb2@khan",
          age: 23,
          address: "karachi",
          phone: "03123456789",
          country: "pakistan",
          city: "karachi",
          state: "sindh",
          zip: "12345",
          street: "12345",
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UseContextHook;

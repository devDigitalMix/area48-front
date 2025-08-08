/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function updatedInfoUser(data) {
    setUser(data);
  }

  return (
    <UserContext.Provider value={{ user, setUser, updatedInfoUser }}>
      {children}
    </UserContext.Provider>
  );
}

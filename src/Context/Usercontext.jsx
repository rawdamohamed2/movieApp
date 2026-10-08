import { createContext, useLayoutEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext("");

function UserContextProvider({ children }) {
  const [UserData, setUserData] = useState(null);
  const getUser = () => {
    let encodeToken = localStorage.getItem("token");
    let decodeToken = jwtDecode(encodeToken);
    setUserData(decodeToken);
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ getUser, UserData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

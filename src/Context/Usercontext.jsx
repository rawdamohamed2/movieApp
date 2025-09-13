import { createContext, useContext, useLayoutEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

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

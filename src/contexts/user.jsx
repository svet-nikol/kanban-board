import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/approutes";

export const UserContext = createContext(null);

const getUserFromLS = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();

  const [isLoggedInUser, setIsLoggedInUser] = useState(getUserFromLS); // null по умолчанию, но мы используем то что есть в LS, если там ничего нет, то значит null

  const loginUser = (user) => {
    setIsLoggedInUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate(AppRoutes.HOME);
  };

  const logoutUser = () => {
    setIsLoggedInUser(null);
    localStorage.removeItem("user");
    navigate(AppRoutes.LOGIN);
  };

  return (
    <UserContext.Provider value={{ isLoggedInUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

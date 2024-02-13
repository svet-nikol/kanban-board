import { useContext } from "react";
import { UserContext } from "../contexts/user";

export const useUser = () => {
  return useContext(UserContext);
};

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/approutes";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  let navigate = useNavigate();

  const [tasks, setTasks] = useState(null);

  const getTasks = (cards) => {
    setTasks(cards);
    navigate(AppRoutes.HOME);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, getTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

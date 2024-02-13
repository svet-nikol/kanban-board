import { useContext } from "react";
import { TasksContext } from "../contexts/tasks";

export const useTasks = () => {
  return useContext(TasksContext);
};

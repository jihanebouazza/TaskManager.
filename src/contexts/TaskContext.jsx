import { createContext, useContext, useState } from "react";
import { getToday, getTomorrow } from "../utils/helpers";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("Tasks"));
    return storedTasks || [];
  });
  const [dueDate, setDueDate] = useState("All tasks");
  const [searchQuery, setSearchQuery] = useState("");

  const today = getToday();

  const tomorrow = getTomorrow();

  const allTasks =
    searchQuery.length > 0
      ? tasks.filter((task) =>
          task.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : dueDate === "Today"
      ? tasks.filter((task) => task.date === today)
      : dueDate === "Tomorrow"
      ? tasks.filter((task) => task.date === tomorrow)
      : tasks;

  function handleAddTask(newTask) {
    setDueDate("All tasks");
    setTasks((tasks) => [...tasks, newTask]);
    localStorage.setItem("Tasks", JSON.stringify([...tasks, newTask]));
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }

  function getTaskById(id) {
    return tasks.find((task) => task.id === id);
  }

  function handleUpdateTask(updatedTask) {
    setDueDate("All tasks");
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
  }

  return (
    <TaskContext.Provider
      value={{
        handleAddTask,
        handleDeleteTask,
        getTaskById,
        handleUpdateTask,
        dueDate,
        setDueDate,
        searchQuery,
        setSearchQuery,
        allTasks,
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("TaskContext was used outside of the task provider");
  return context;
}

export { useTasks, TaskProvider };

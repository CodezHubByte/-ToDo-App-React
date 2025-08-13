import { useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { TaskList } from "../components/TaskList";
import { ModeContext } from "../context/ModeContextProvider";

export const AllTodoPage = () => {
  const { isDarkMode } = useContext(ModeContext);
  const fetchedTasks = useFetch(
    "https://68934b90c49d24bce86a361c.mockapi.io/list"
  );

  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    if (fetchedTasks?.length > 0) {
      const normalized = fetchedTasks.map((task) => ({
        ...task,
        title: task.name || task.title,
      }));
      setTasks(normalized);
    }
  }, [fetchedTasks]);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode-bg" : "light-mode-bg";
    return () => {
      document.body.className = "";
    };
  }, [isDarkMode]);

  const handleAddTodo = () => {
    if (newTaskName.trim() === "") return;

    const taskToPost = {
      title: newTaskName,
      complete: false,
    };

    fetch("https://68934b90c49d24bce86a361c.mockapi.io/list", {
      method: "POST",
      body: JSON.stringify(taskToPost),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((createdTask) => {
        setTasks((prev) => {
          if (prev.some((task) => task.id === createdTask.id)) {
            return prev;
          }
          return [...prev, createdTask];
        });
        setNewTaskName("");
      });
  };

  const handleDelete = (id) => {
    fetch(`https://68934b90c49d24bce86a361c.mockapi.io/list/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedTask) => {
        console.log("Task deleted:", deletedTask);
        setTasks((prev) => prev.filter((task) => task.id !== id));
      });
  };

  return (
    <main className="main-container">
      <div className={`${isDarkMode ? "todo-card" : "todo-card-light"}`}>
        <p className={`${isDarkMode ? "todo-title" : "todo-title-light"}`}>
          List of ToDos
        </p>
        <hr className="new4" />
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your task..."
            className={`input-field ${isDarkMode ? "dark-input" : ""}`}
            aria-label="Enter your task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTodo();
            }}
          />
          <button type="button" className="add-button" onClick={handleAddTodo}>
            Add Task
          </button>
        </div>

        <TaskList
          tasks={tasks}
          isDarkMode={isDarkMode}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
};

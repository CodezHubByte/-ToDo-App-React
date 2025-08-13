import { useContext, useEffect, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { TodoForm } from "../components/TodoForm";
import { Task_Card } from "../components/Task_Card";
import { ModeContext } from "../context/ModeContextProvider.jsx";

export const HomePage = () => {
  const { isDarkMode } = useContext(ModeContext);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode-bg" : "light-mode-bg";
    return () => {
      document.body.className = "";
    };
  }, [isDarkMode]);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [editData, setEditData] = useState({});

  const handleAddTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now(), complete: false };
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((t) =>
      t.id === updatedTodo.id ? updatedTodo : t
    );
    setTodos(updatedTodos);
    setEditData({});
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const lineTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const UpdateTodo = (id) => {
    const filterData = todos.find((todo) => todo.id === id);
    setEditData(filterData || {});
  };

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <main className="main-container">
        <div className={`${isDarkMode ? "todo-card" : "todo-card-light"}`}>
          <h1 className={`${isDarkMode ? "todo-title" : "todo-title-light"}`}>
            My Todos <FaCheckSquare color="yellow" size="25px" />
          </h1>

          <TodoForm
            getData={handleAddTodo}
            onUpdate={handleUpdateTodo}
            editData={editData}
          />

          <div className="todo-list box">
            {todos.length === 0 ? (
              <p
                className={`${
                  isDarkMode ? "no-task-text" : "no-task-text-light"
                }`}
              >
                No task added.
              </p>
            ) : (
              todos.map((todo) => (
                <Task_Card
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  color={todo.color}
                  complete={todo.complete}
                  deleteHandler={deleteTodo}
                  lineHandler={lineTodo}
                  updateHandler={UpdateTodo}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};

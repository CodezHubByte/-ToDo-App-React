import { useEffect, useState } from "react";

export function TodoForm({ getData, onUpdate, editData }) {
  const [task, setTask] = useState("");
  const [color, setColor] = useState("#fef08a");

  useEffect(() => {
    if (editData && editData.text) {
      setTask(editData.text);
      setColor(editData.color || "#fef08a");
    } else {
      setTask("");
      setColor("#fef08a");
    }
  }, [editData]);

  const taskChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim().length === 0) {
      alert("Please enter a task before adding!");
      return;
    }

    const newTodo = {
      id: editData && editData.id ? editData.id : Date.now(),
      text: task.trim(),
      color: color,
    };

    if (editData && editData.id) {
      onUpdate(newTodo);
    } else {
      getData(newTodo);
    }

    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={taskChangeHandler}
          className="input-field_2"
        />

        <button type="submit" className="add-button">
          {editData && editData.text ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}

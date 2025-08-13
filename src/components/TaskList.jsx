export const TaskList = ({ tasks, isDarkMode, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            margin: "10px 0",
            backgroundColor: isDarkMode ? "#333333" : "#bcaeaeff",
            padding: "15px 20px",
            borderRadius: "8px",
            color: isDarkMode ? "#fff" : "#000",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{task.title}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                backgroundColor: task.complete ? "green" : "red",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              {task.complete ? "Done" : "Pending"}
            </span>
            <button
              onClick={() => onDelete(task.id)}
              style={{
                backgroundColor: "#ff4d4f",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

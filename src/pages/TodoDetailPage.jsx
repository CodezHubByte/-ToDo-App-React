import { useParams } from "react-router-dom";

const TodoDetailPage = () => {
  const { todoId } = useParams();
  const todos = JSON.parse(localStorage.getItem("todoData")) || [];
  const todo = todos.find((t) => String(t.id) === String(todoId));

  return (
    <div>
      <p>Todo ID: {todoId}</p>
      <div className="detail-pg ">{todo ? todo.text : "Todo not found"}</div>
    </div>
  );
};

export default TodoDetailPage;

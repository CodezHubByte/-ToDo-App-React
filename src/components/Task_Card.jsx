import { FaCheckSquare } from "react-icons/fa";
import { MdDelete, MdTipsAndUpdates } from "react-icons/md";
import { PiArrowSquareRightFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export const Task_Card = ({
  text,
  color,
  deleteHandler,
  id,
  updateHandler,
  lineHandler,
  complete,
}) => {
  const navigate = useNavigate();
  const navigateToDetailPage = (id) => {
    navigate(`/todo/${id}`);
  };
  return (
    <div className="task-card flex" style={{ backgroundColor: color }}>
      <h2 style={{ textDecoration: complete ? "line-through" : "none" }}>
        {text}
      </h2>
      <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
        <FaCheckSquare
          title="Mark as Done"
          color={complete ? "green" : "#DAA520"}
          size="28px"
          style={{ cursor: "pointer" }}
          onClick={() => lineHandler(id)}
        />
        <MdTipsAndUpdates
          title="Update"
          color="blue"
          size="28px"
          style={{ cursor: "pointer" }}
          onClick={() => updateHandler(id)}
        />
        <MdDelete
          title="Delete"
          color="red"
          size="28px"
          style={{ cursor: "pointer" }}
          onClick={() => deleteHandler(id)}
        />
        <PiArrowSquareRightFill
          title="More Options"
          color="black"
          size="28px"
          style={{ cursor: "pointer" }}
          onClick={() => navigateToDetailPage(id)}
        />
      </div>
    </div>
  );
};

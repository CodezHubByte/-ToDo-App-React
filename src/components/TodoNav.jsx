import { FaCheckSquare } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContextProvider";

export function TodoNav() {
  const { isDarkMode, toggleMode } = useContext(ModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("LoginData");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="Part1">
        TODO <FaCheckSquare color="yellow" size="25px" />
      </div>

      <div className="Part2">
        <Link className="nav-item active" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/about">
          About
        </Link>
        <Link className="nav-item" to="/allTodo">
          All Todos
        </Link>
        </div>

      <div className="Part3">
        <div onClick={toggleMode} style={{ cursor: "pointer" }}>
          {isDarkMode ? (
            <BsCloudSunFill color="white" size="25px" />
          ) : (
            <BsMoonStarsFill color="white" size="25px" />
          )}
        </div>
        <button className="btn1" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

import { useContext, useEffect } from "react";
import { ModeContext } from "../context/ModeContextProvider";

export const AboutPage = () => {
  const { isDarkMode } = useContext(ModeContext);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode-bg" : "light-mode-bg";
    return () => {
      document.body.className = "";
    };
  }, [isDarkMode]);
  return (
    <>
      <main class="main-container">
        <div class={`${isDarkMode ? "todo-card" : "todo-card-light"}`}>
          <p class={`${isDarkMode ? "todo-title" : "todo-title-light"}`}>
            About ToDo
          </p>
          <hr class="new4" />
          <p>
            Lorem ipsum dolor sit amet,{" "}
            <span style={{ color: "red" }}>consectetur adipisicing elit. </span>
            Distinctio, molestias! Praesentium, qui reprehenderit quos vitae sit
            accusantium veritatis repudiandae quia, nostrum numquam explicabo
            voluptatum recusandae. Accusamus est velit laborum doloremque
            tempore id itaque beatae atque totam eligendi, sed laboriosam vel
            saepe libero nam quisquam. Voluptate minus quidem a aperiam aliquam!
          </p>
        </div>
      </main>
    </>
  );
};

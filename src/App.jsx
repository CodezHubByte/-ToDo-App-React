import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { AllTodoPage } from "./pages/AllTodoPage";
import { SignupPage } from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./pages/RootLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import TodoDetailPage from "./pages/TodoDetailPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/allTodo",
        element: <AllTodoPage />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoDetailPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

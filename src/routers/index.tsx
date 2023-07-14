import { createBrowserRouter } from "react-router-dom";
import Blog from "../views/Blog";
import Home from "../views/Home";
import Application from "../views/Application";
import PositiveInteger from "../views/PositiveInteger";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/", element: <Blog /> },
  { path: "/app", element: <Application /> },
  { path: "/app/positive_integer", element: <PositiveInteger /> },
]);

export default router;

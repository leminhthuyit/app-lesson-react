import { createBrowserRouter } from "react-router-dom";
import Examples from "../views/Examples";
import Home from "../views/Home";
import Product from "../views/Product";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/", element: <Examples /> },
  { path: "/product", element: <Product /> },
]);

export default router;

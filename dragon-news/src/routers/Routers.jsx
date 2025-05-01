import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element:<CategoryNews></CategoryNews>,
      },

      {
        path: "/news",
        element: <div>news</div>,
      },
      {
        path: "/*",
        element: <div>Error 404</div>,
      },
    ]
  },

]);

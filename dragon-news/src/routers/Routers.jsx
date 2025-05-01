import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/about",
        element: <div>about</div>,
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

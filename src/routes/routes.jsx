import { createBrowserRouter } from "react-router-dom";
import Layout from "../../outlet/Layout";
import Home from "../HOME/Home";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Arcti from "../arcti";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <Arcti />,
      },
    ],
  },
]);

export default router;
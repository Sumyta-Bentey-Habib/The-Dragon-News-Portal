import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Authentication from "../layouts/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "//category/:id",
        Component: CategoryNews,
        loader:()=>fetch('/public/news.json')
      },
    ],
  },
  {
    path:"/auth",
    Component: Authentication,
  },
  {
    path:"/news",
    element: <h2> News Layout</h2>,

  },
  {
    path:"/*",
    element: <h2>Error 404</h2>
  }
]);
export default router;

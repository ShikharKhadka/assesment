import { createBrowserRouter } from "react-router";
// import App from "../App";
import { Home } from "../pages/home";
import { Layout } from "../layout/layout";
import Task2 from "../pages/task2/task2";
import Default from "../pages/default";

export const routerProvider = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
        {
        index: true,
        Component: Default
      },
      {
        Component: Home,
        path: "home",

      },
      {
        Component: Task2,
        path: "task2",
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
// import App from "../App";
import { Home } from "../pages/home";
import { Layout } from "../layout/layout";
import Task2 from "../pages/task2/task2";

export const routerProvider = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        Component: Home,
        children: [
          {
            index: true,
            path: "home",
          },
        ],
      },
      {
        Component: Task2,
        path: "task2",
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
// import App from "../App";
import { Home } from "../pages/home";
import { Layout } from "../layout/layout";
import App from "../App";

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
    ],
  },
]);

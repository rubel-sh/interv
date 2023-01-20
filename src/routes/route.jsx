import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../layout/Dashboardlayout";
import MainLayout from "../layout/MainLayout";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "dashboard",
    element: <Dashboardlayout />,
  },
]);

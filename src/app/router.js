import { createBrowserRouter } from "react-router";
import LandingPage from "../features/landing/LandingPage";
import Layout from "features/layout/Layout";
import ErrorPage from "features/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import LandingPage from "../features/landing/LandingPage";
import Layout, { layoutLoader } from "features/layout/Layout";
import ErrorPage from "features/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: layoutLoader,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;

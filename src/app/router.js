import { createBrowserRouter } from "react-router";
import LandingPage from "../features/landing/LandingPage";
import Layout, { layoutLoader } from "features/layout/Layout";
import ErrorPage from "features/error/ErrorPage";
import SignIn, { loginAction } from "features/users/SignIn";
import LoginErrorPage from "features/users/LoginErrorPage";
import Dashboard from "features/users/Dashboard";
import Clients, { clientsLoader } from "features/clients/Clients";

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
      {
        path: "/signin",
        element: <SignIn />,
        errorElement: <LoginErrorPage />,
        action: loginAction,
      },
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/clients",
        element: <Clients />,
        loader: clientsLoader,
      },
    ],
  },
]);

export default router;

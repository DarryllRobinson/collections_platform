import { createBrowserRouter } from "react-router";
import LandingPage from "../features/landing/LandingPage";
import Layout, { layoutLoader } from "features/layout/Layout";
import ErrorPage from "features/error/ErrorPage";
import SignIn, { loginAction } from "features/users/SignIn";
import LoginErrorPage from "features/users/LoginErrorPage";
import Dashboard from "features/users/Dashboard";
import Clients, { clientsLoader } from "features/clients/Clients";
import UserAdmin, { userAdminLoader } from "features/users/admin/Admin";
import UserCreate, { userCreateAction } from "features/users/admin/Create";
import Customers, { customersLoader } from "features/customers/Customers";
import Collections, {
  collectionsLoader,
} from "features/collections/Collections";
import Collection, { collectionLoader } from "features/collections/Collection";
import Accounts, { accountsLoader } from "features/accounts/Accounts";
import Account, { accountLoader } from "features/accounts/Account";

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
      {
        path: "/users",
        element: <UserAdmin />,
        loader: userAdminLoader,
      },
      {
        path: "/create",
        element: <UserCreate />,
        action: userCreateAction,
      },
      { path: "/customers", element: <Customers />, loader: customersLoader },
      {
        path: "/collections",
        element: <Collections />,
        loader: collectionsLoader,
      },
      {
        path: "/collection/:collectionId",
        element: <Collection />,
        loader: collectionLoader,
      },
      {
        path: "/accounts/:customerRefNo",
        element: <Accounts />,
        loader: accountsLoader,
      },
      {
        path: "/account/:accountId",
        element: <Account />,
        loader: accountLoader,
      },
    ],
  },
]);

export default router;

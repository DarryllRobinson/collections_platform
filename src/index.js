import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./app/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

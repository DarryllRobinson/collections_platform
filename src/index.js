import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./app/router";
import { userService } from "features/users/user.service";

// attempt silent token refresh before startup
userService.refreshToken().finally(startApp);

function startApp() {
  // console.log("startApp", userService.userValue);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

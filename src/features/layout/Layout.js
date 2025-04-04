import React, { useEffect, useState, useMemo } from "react";
import { Outlet } from "react-router";
import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import NavbarLayout from "../../navigation/NavbarLayout";
import { globalLight, globalDark } from "../../theme/globalTheme"; // Import global themes
import { userService } from "features/users/user.service";
import Copyright from "./Copyright";

// Need to check if the user is logged in with a silent check to the db
export async function layoutLoader() {
  const user = await userService.refreshToken();
  // console.log("layoutLoader user: ", user ? user : "Nothing");
  return { user };
}

export default function Layout() {
  // Light theme is default theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Memoize theme to avoid unnecessary re-creation
  const theme = useMemo(
    () => (isDarkTheme ? globalDark : globalLight),
    [isDarkTheme]
  );

  // Getting device scheme settings to use as default for App
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)"); // change to light after development
    setIsDarkTheme(mediaQuery.matches);

    const handleChange = (event) => setIsDarkTheme(event.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup event listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Toggling theme
  const changeTheme = () => setIsDarkTheme((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        aria-label="box-outline"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 4 }, // Responsive padding
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <NavbarLayout checked={isDarkTheme} onChange={changeTheme} />
        <Outlet />
        <Box
          component="footer"
          sx={{
            py: 2,
            px: { xs: 2, sm: 4 }, // Responsive padding
            mt: "auto",
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
        >
          <Container maxWidth="sm">
            <Copyright sx={{ pt: 2 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

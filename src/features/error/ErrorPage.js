import { Link as RouterLink, useRouteError } from "react-router";
import {
  Box,
  Typography,
  Button,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { globalLight, globalDark } from "../../theme/globalTheme"; // Import global themes
import { useState, useMemo } from "react";

export default function ErrorPage() {
  // State to toggle between light and dark themes (optional)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Memoize the theme to avoid unnecessary re-renders
  const theme = useMemo(
    () => (isDarkTheme ? globalDark : globalLight),
    [isDarkTheme]
  );

  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent global styles */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 4,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontStyle: "italic", marginBottom: 4 }}
        >
          {error.statusText || error.message}
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="primary"
          sx={{
            px: 4,
            py: 2,
            fontSize: "1.2rem",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
              transform: "scale(1.05)",
              boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Take me home
        </Button>
      </Box>
    </ThemeProvider>
  );
}

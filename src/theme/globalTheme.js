import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

// Import Inter font
import "@fontsource/inter";

const baseTheme = {
  typography: {
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700 }, // Updated to match LandingPage.js
    h2: { fontSize: "2.25rem", fontWeight: 600 }, // Updated to match LandingPage.js
    body1: { fontSize: "1rem", lineHeight: 1.5 },
    body2: { fontSize: "0.875rem", lineHeight: 1.43 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase text
          borderRadius: "8px", // Rounded corners
        },
      },
    },
  },
};

export const globalLight = responsiveFontSizes(
  createTheme({
    ...baseTheme,
    palette: {
      mode: "light",
      primary: { main: "#4A90E2" }, // Matches LandingPage.js
      secondary: { main: "#50E3C2" }, // Matches LandingPage.js
      background: { default: "#F5F5F5", paper: "#FFFFFF" },
      text: { primary: "#333333", secondary: "#444444" },
    },
  })
);

export const globalDark = responsiveFontSizes(
  createTheme({
    ...baseTheme,
    palette: {
      mode: "dark",
      primary: { main: "#1E88E5" }, // Matches LandingPage.js
      secondary: { main: "#26A69A" }, // Matches LandingPage.js
      background: { default: "#121212", paper: "#1E1E1E" },
      text: { primary: "#E0E0E0", secondary: "#A0A0A0" },
    },
  })
);

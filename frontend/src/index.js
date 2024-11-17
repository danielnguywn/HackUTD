import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import "./index.css"; // Ensure Tailwind CSS is imported

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Material-UI's default primary blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

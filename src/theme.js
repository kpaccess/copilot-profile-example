import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5c3d2e",
    },
    secondary: {
      main: "#f2c8a0",
    },
    text: {
      primary: "#2b2b2b",
      secondary: "#6b6b6b",
    },
    background: {
      default: "#fff8f2",
      paper: "#fff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: ["Poppins", "Inter", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 6px 18px rgba(40,30,20,0.06)",
        },
      },
    },
  },
});

export default theme;

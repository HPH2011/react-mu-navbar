import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#273574",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "amber",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default customTheme;

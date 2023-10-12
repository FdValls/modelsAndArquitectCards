import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        900: "#0e1d4c",
      },
    },
    dark: {
      palette: { 50: "#f0f5ff" },
    },
  },
});

export default theme;

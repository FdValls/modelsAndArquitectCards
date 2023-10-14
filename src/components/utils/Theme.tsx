import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import blue from "@mui/material/colors/blue";
import green from "@mui/material/colors/green";
import yellow from "@mui/material/colors/yellow";
import violet from "@mui/material/colors/purple";
import { grey } from "@mui/material/colors";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[300],
        },
        button: {
          pepeButton: red[600],
          bgButton: "black",
        },
        pepeButtonMui: blue[300],
        textoParrafo: violet[600],
        colorButtonText: {
          color: "white",
          fontSize: "clamp(1.25rem, 4vw, 2rem)",
        },
        titleH2: {
          color: "#ff0087",
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
        },

        background: {
          paper: "hsl(240, 15%, 95%)",
        },
        anchor: "orange",
        backgroundCardIACurrentCourses: {
          background: "linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)",
          borderRadius: "22px"
        },
        backgroundCardCoursesRecommended: {
          background: "linear-gradient(38deg, #EF5C98 1.57%, #6D8AF8 98.56%)",
          borderRadius: "22px",
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: grey[300],
        },
        button: {
          pepeButton: green[300],
          bgButton: "white",
        },
        pepeButtonMui: yellow[300],
        textoParrafo: green[300],
        colorButtonText: {
          color: "black",
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
        },
        titleH2: {
          color: "#ff0087",
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
        },
        background: {
          paper: "black",
        },
        anchor: "orange",
        backgroundCardIACurrentCourses: {
          background: "linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)",
          borderRadius: "22px"
        },
        backgroundCardCoursesRecommended: {
          borderRadius: "22px",
          background: "linear-gradient(38deg, #EF5C98 1.57%, #6D8AF8 98.56%)",
          width: "279px",
          height: "320px",
          flexShrink: "0",
        }
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "3px solid",
          width: "40%",
          background: "var(--mui-palette-button-bgButton)", 
          color: "var(--mui-palette-colorButtonText-color)", 
          // color: "blue",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          color: "white",
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: "AvertaStd-Semibold",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "1.5",
        },
      },
    },
  },
});

export default theme;

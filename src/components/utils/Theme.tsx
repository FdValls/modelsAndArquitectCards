import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import blue from "@mui/material/colors/blue";
import green from "@mui/material/colors/green";
import yellow from "@mui/material/colors/yellow";
import violet from "@mui/material/colors/purple";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: violet[300],
        },
        button: {
          pepeButton: red[600],
          bgButton: "yellow",
        },
        pepeButtonMui: blue[300],
        textoParrafo: violet[600],
        titleH1: {
          color: "#00ff00", // Color personalizado titleH1
          fontSize: "clamp(1.5rem, 4vw, 2rem)", // Tamaño de fuente con `clamp`
        },
        titleH2: {
          color: "#ff0087", // Color personalizado titleH1
          fontSize: "clamp(1rem, 3vw, 1.3rem)", // Tamaño de fuente con `clamp`
        },

        background: {
          paper: "hsl(240, 15%, 95%)",
        },
        anchor: "orange",
        fontCard: "white",
      },
    },
    dark: {
      palette: {
        primary: {
          main: green[300],
        },
        button: {
          pepeButton: green[300],
          bgButton: "red",
        },
        pepeButtonMui: yellow[300],
        textoParrafo: green[300],
        titleH1: {
          color: "#ff00ff", // Color personalizado titleH1
          fontSize: "clamp(1.5rem, 4vw, 2rem)", // Tamaño de fuente con `clamp`
        },
        titleH2: {
          color: "#ff0087", // Color personalizado titleH1
          fontSize: "clamp(1rem, 3vw, 1.3rem)", // Tamaño de fuente con `clamp`
        },
        background: {
          paper: "black",
        },
        anchor: "orange",
        fontCard: "white",
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
          color: "black",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
          // fontSize: "24px", 
        },
        body2:{
          color: "yellow",
        },
        body1: {
          color: "cyan",
          // fontSize: "30px"
        }
        // Puedes definir clases específicas aquí
      },
    },
  }

});

export default theme;

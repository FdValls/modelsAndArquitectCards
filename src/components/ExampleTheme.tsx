import { Button } from '@mui/material';
import theme from "./utils/Theme.tsx";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import "../App.css"
import "../button.module.css" // si comento esta importacion, me toma el css main
import ModeSwitcher from './utils/ModeSwitcher.tsx';
import { Link } from "react-router-dom";

export default function ExampleTheme() {

  return (
    <>
        <CssVarsProvider theme={theme}>
          <ModeSwitcher />
          <br />
          <button >
            TEST
          </button>
          <br />
          <br />
          <button >
            Green
          </button>
          <br />
          <br />
          <Link to="/card" style={{ textDecoration: 'none' }}>
            <Button > MUI </Button>
          </Link>
          <br />
        </CssVarsProvider>
    </>
  );
}


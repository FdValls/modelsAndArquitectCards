import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExampleTheme from '../ExampleTheme';
import SignInSide from '../SignIn';
import RecipeReviewCard from "../RecipeReviewCard.jsx";
import { CssBaseline } from "@mui/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import theme from "../utils/Theme.tsx";


function RouterMain() {
  return (
    <>
      <BrowserRouter>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route path="/home" element={<SignInSide />} />
            <Route path="/example" element={<ExampleTheme />} />
            <Route path="/card" element={<RecipeReviewCard />} />
          </Routes>
        </CssVarsProvider>
      </BrowserRouter>
    </>
  )
}

export default RouterMain
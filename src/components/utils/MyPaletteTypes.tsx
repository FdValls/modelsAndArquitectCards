import { TypeText } from '@mui/material';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    gradient?: string;
    border?: {
      subtle: string;
    };
    pepeButton?: string;
    pepeButtonMui?: string;
    textoParrafo?: string;
    bg?: string;
    button?: PaletteOptions;
    bgButton?: string;
    anchor?: string;
    colorButtonText?: object;
    titleH2?: object;
    backgroundCardIACurrentCourses?: object;
    backgroundCardCoursesRecommended?: object;
  }
}

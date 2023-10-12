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
    titleH1?: object;
    titleH2?: object;
    fondoCard?: string;
  }
}

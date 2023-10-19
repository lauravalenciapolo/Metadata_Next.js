import { createTheme } from "@mui/material";
import { Plus_Jakarta_Sans } from "next/font/google";

const josefin_Sans = Plus_Jakarta_Sans({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1239FA",
      contrastText: "#F0F0F0"
    },
    secondary: {
      main: "#F0F0F0",
      contrastText: "#1239FA"
    },
    text: {
      primary: "#000000",
      secondary: "#1239FA",
    },
  },
  typography: {
    fontFamily: josefin_Sans.style.fontFamily,
    // h1 = Titulo principal utilizado en landing page
    h1: {
      fontSize: 55,
      color: '#2D2D2D',
      fontStyle: 'normal',
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      color: '#2D2D2D',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    h3: {
      fontSize: 28,
      color: '#252525',
      fontStyle: 'normal',
      fontWeight: 400,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 10,
    },
    body1: {
      fontSize: 8,
      fontWeight: 400,
    },
    body2: {
      fontSize: 8,
      fontWeight: 300,
    },
    button: {
      fontStyle: 'italic',
    },
  },
  shape: {
    borderRadius: 10,
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Raleway';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
});

export default theme
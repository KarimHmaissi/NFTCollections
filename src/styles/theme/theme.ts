import { Color, createTheme, ThemeOptions } from "@mui/material";
import { Moderat } from "./fonts";

declare module "@mui/material/styles" {
  interface Theme {}

  interface Palette {
    grey: Color;
  }
}

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: Moderat.style.fontFamily,
  },
  palette: {
    mode: "dark",
    grey: {
      400: "#858585",
      500: "#ABACAD",
      600: "#8F9092",
      700: "#696B6D",
      800: "#444649",
    },
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#020202",
      paper: "#020202",
    },
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: `
    //       @font-face {
    //         font-family: 'Moderat';
    //         font-style: normal;
    //         font-display: swap;
    //         font-weight: 400;
    //         src: local('Moderat'), local('Moderat-Regular'), url(${Moderat}) format('woff2');
    //       }
    //       @font-face {
    //         font-family: 'Moderat';
    //         font-style: normal;
    //         font-display: swap;
    //         font-weight: 500;
    //         src: local('Moderat'), local('Moderat-Bold'), url(${Moderat}) format('woff2');
    //       }
    //     `,
    // },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "7px 12px 8px 12px",
          paddingRight: "12px",
          color: "rgba(255, 255, 255, 0.36)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "8px",
          borderColor: "rgba(255, 255, 255, 0.36)",
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

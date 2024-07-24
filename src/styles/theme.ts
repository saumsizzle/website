import { createTheme } from "@mui/material";
import tailwindConfigJSON from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fontFamily =
  '"Bricolage Grotesque", sans-serif';

const tailwindConfig = resolveConfig(tailwindConfigJSON);
const colors: any = tailwindConfig.theme?.colors;
const defaultColor = colors.white;
export const theme = createTheme({
  palette: {
    primary: {
      light: defaultColor,
      main: defaultColor,
      dark: defaultColor,
      contrastText: defaultColor,
    },

    secondary: {
      light: colors.brightgreen,
      main: colors.mellowgreen,
      dark: colors.brown,
      contrastText: defaultColor,
    },
  },
  typography: {
    allVariants: {
      fontFamily,
      color: defaultColor,
    },
    body1: {
      fontWeight: 400,
      lineHeight: "2rem",
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.gray[100],
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: colors.mellowgreen,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        text: {
          cursor: "pointer !important",
          fontSize: "0.65rem",
          fontWeight: 300,
        },
        root: {
          cursor: "pointer !important",
          outline: "none !important",
          fontWeight: 600,
          letterSpacing: 1,
        },
      },
    },
  },
});

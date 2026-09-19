import { createTheme } from "@mui/material";
import type { ThemeMode } from "@/contexts/ThemeModeContext";

const titleFontDark = '"UnifrakturMaguntia", serif';
const bodyFontDark = '"Cormorant Garamond", serif';
const titleFontLight = '"Geist Pixel Square", monospace';
const bodyFontLight = '"Geist Sans", sans-serif';

const palettes = {
  dark: {
    bg: "#08070b",
    bgAlt: "#1c1024",
    text: "#e7def0",
    textMuted: "#a698b3",
    accent: "#7a1030",
    accentBright: "#c81e4a",
    titleFont: titleFontDark,
    bodyFont: bodyFontDark,
  },
  light: {
    bg: "#fdfbff",
    bgAlt: "#e6defb",
    text: "#3a3454",
    textMuted: "#6b6489",
    accent: "#c2c5f5",
    accentBright: "#8b8ee0",
    titleFont: titleFontLight,
    bodyFont: bodyFontLight,
  },
};

export function getMuiTheme(mode: ThemeMode) {
  const p = palettes[mode];

  return createTheme({
    palette: {
      mode,
      primary: {
        light: p.bgAlt,
        main: p.bgAlt,
        dark: p.bg,
        contrastText: p.text,
      },
      secondary: {
        light: p.accentBright,
        main: p.accent,
        dark: p.accentBright,
        contrastText: p.text,
      },
      background: {
        default: p.bg,
        paper: p.bgAlt,
      },
      text: {
        primary: p.text,
        secondary: p.textMuted,
      },
    },
    typography: {
      allVariants: {
        fontFamily: p.bodyFont,
        color: p.text,
      },
      body1: {
        fontWeight: 400,
        lineHeight: "2rem",
      },
      h1: { fontFamily: p.titleFont },
      h2: { fontFamily: p.titleFont },
      h3: { fontFamily: p.titleFont },
      h4: { fontFamily: p.titleFont },
      h5: { fontFamily: p.titleFont },
      h6: { fontFamily: p.titleFont },
    },

    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: p.text,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: p.bg,
            borderBottom: `1px solid ${p.bgAlt}`,
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            fontFamily: p.titleFont,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          text: {
            cursor: "pointer !important",
            fontSize: "0.7rem",
            fontFamily: p.titleFont,
            fontWeight: 300,
            color: p.text,
          },
          root: {
            cursor: "pointer !important",
            outline: "none !important",
            fontFamily: p.titleFont,
            fontWeight: 600,
            letterSpacing: 1,
            color: p.text,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: p.bgAlt,
            color: p.text,
          },
        },
      },
    },
  });
}

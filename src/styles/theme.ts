import { createTheme } from "@mui/material";
import type { ThemeMode } from "@/contexts/ThemeModeContext";

const titleFontDark = '"Death Note", serif';
const bodyFontDark = '"Cormorant Garamond", serif';
const titleFontLight = '"Geist Pixel Square", monospace';
const bodyFontLight = '"Geist Sans", sans-serif';

const palettes = {
  dark: {
    bg: "#021b20",
    bgAlt: "#073642",
    text: "#93a1a1",
    textMuted: "#586e75",
    titleColor: "#eee8d5",
    accent: "#dc322f",
    accentBright: "#cb4b16",
    titleFont: titleFontDark,
    bodyFont: bodyFontDark,
  },
  light: {
    bg: "#d8ebe6",
    bgAlt: "#f6d2d9",
    text: "#3a3454",
    textMuted: "#6b6489",
    titleColor: "#3a3454",
    accent: "#a9cfe0",
    accentBright: "#6f8fc9",
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
        light: p.accent,
        main: p.accentBright,
        dark: p.accentBright,
        contrastText: p.bg,
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
      h1: { fontFamily: p.titleFont, color: p.titleColor },
      h2: { fontFamily: p.titleFont, color: p.titleColor },
      h3: { fontFamily: p.titleFont, color: p.titleColor },
      h4: { fontFamily: p.titleFont, color: p.titleColor },
      h5: { fontFamily: p.titleFont, color: p.titleColor },
      h6: { fontFamily: p.titleFont, color: p.titleColor },
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
            color: p.titleColor,
            borderBottom: `1px solid ${p.bgAlt}`,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: p.titleColor,
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            fontFamily: p.titleFont,
            color: p.titleColor,
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
            color: p.titleColor,
          },
          root: {
            cursor: "pointer !important",
            outline: "none !important",
            fontFamily: p.titleFont,
            fontWeight: 600,
            letterSpacing: 1,
            color: p.titleColor,
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

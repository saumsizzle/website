import "@/styles/globals.scss";
import { getMuiTheme } from "@/styles/theme";
import { ThemeModeProvider, useThemeMode } from "@/contexts/ThemeModeContext";

import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useMemo } from "react";

function AppShell({ Component, pageProps }: AppProps) {
  const { mode } = useThemeMode();
  const theme = useMemo(() => getMuiTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <ThemeModeProvider>
      <AppShell {...props} />
    </ThemeModeProvider>
  );
}

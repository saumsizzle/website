import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "theme-mode";

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(
  undefined
);

function applyModeToDom(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.classList.toggle("light", mode === "light");
  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // localStorage unavailable (private mode, etc) - theme just won't persist
  }
}

// Always render "dark" on both server and the first client pass so hydration
// never mismatches. The no-flash script in _document.tsx already set the
// correct data-theme/class on <html> before React mounts (avoiding a visible
// flash); we just read that value into React state once, without writing
// back to the DOM (writing would race the script and cause a one-frame flip).
export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const fromDom = document.documentElement.getAttribute("data-theme");
    if (fromDom === "light" || fromDom === "dark") {
      setMode(fromDom);
    }
  }, []);

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyModeToDom(next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return ctx;
}

export const THEME_STORAGE_KEY = STORAGE_KEY;

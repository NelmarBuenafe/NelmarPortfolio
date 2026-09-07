/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const THEME_KEY = "portfolio-theme";
const ACCENT_KEY = "portfolio-accent";
const themes = ["system", "light", "dark"];
const accents = ["teal", "blue", "violet", "amber"];

const AppearanceContext = createContext(null);

function readPreference(key, allowed, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function AppearanceProvider({ children }) {
  const [theme, setThemeState] = useState(() => readPreference(THEME_KEY, themes, "system"));
  const [accent, setAccentState] = useState(() => readPreference(ACCENT_KEY, accents, "teal"));
  const [systemTheme, setSystemTheme] = useState(() => getSystemTheme());
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.dataset.accent = accent;
  }, [accent, resolvedTheme]);

  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Preferences remain usable when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    try {
      window.localStorage.setItem(ACCENT_KEY, accent);
    } catch {
      // Preferences remain usable when storage is unavailable.
    }
  }, [accent]);

  useEffect(() => {
    if (theme !== "system") return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => setSystemTheme(event.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      accent,
      resolvedTheme,
      setTheme: (value) => themes.includes(value) && setThemeState(value),
      setAccent: (value) => accents.includes(value) && setAccentState(value),
    }),
    [accent, resolvedTheme, theme],
  );

  return <AppearanceContext.Provider value={value}>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  const context = useContext(AppearanceContext);
  if (!context) throw new Error("useAppearance must be used inside AppearanceProvider");
  return context;
}

export { accents, themes };

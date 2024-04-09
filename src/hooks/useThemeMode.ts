import { useEffect, useState } from "react";
import { ThemeType } from "../types.ts";

const getMatchMediaDarkScheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)");

const getUserSystemTheme = (): ThemeType => {
  if (getMatchMediaDarkScheme().matches) return ThemeType.Dark;

  return ThemeType.Light;
};

const useThemeMode = () => {
  const [mode, setMode] = useState(getUserSystemTheme());

  useEffect(() => {
    const body = document.body;

    if (mode === ThemeType.Dark) {
      body.setAttribute("data-theme", "dark");

      return;
    }

    body.setAttribute("data-theme", "light");
  }, [mode]);

  useEffect(() => {
    const matchMediaDark = getMatchMediaDarkScheme();

    const listener = (e: MediaQueryListEvent) => {
      return setMode(e.matches ? ThemeType.Dark : ThemeType.Light);
    };

    matchMediaDark.addEventListener("change", listener);

    return () => {
      matchMediaDark.removeEventListener("change", listener);
    };
  }, []);

  return { mode };
};

export default useThemeMode;

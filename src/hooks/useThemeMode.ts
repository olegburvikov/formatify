import { useEffect, useState } from "react";
import { ThemeType } from "../types.ts";

const useThemeMode = () => {
  const [mode, setMode] = useState(ThemeType.Light);

  const onSelectMode = (mode: ThemeType) => {
    setMode(mode);

    if (mode === ThemeType.Dark) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  };

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? ThemeType.Dark : ThemeType.Light),
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ThemeType.Dark
        : ThemeType.Light,
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return { mode };
};

export default useThemeMode;

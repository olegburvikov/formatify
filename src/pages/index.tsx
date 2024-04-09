import { FC } from "react";
import useThemeMode from "../hooks/useThemeMode.ts";

export const App: FC = () => {
  useThemeMode();

  return <div>App</div>;
};

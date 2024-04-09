import { FC } from "react";
import useThemeMode from "../hooks/useThemeMode.ts";
import { RootPage } from "./Root";
import { Outlet } from "../components/Outlet";

export const App: FC = () => {
  useThemeMode();

  return (
    <Outlet>
      <RootPage />
    </Outlet>
  );
};

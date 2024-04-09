import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { Header } from "../Header";

type OutletProps = {
  wide?: boolean;
};

export const Outlet: FC<PropsWithChildren<OutletProps>> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

import { FC } from "react";
import styles from "./styles.module.scss";
import AppLogo from "../../assets/icons/logo.svg?react";

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <AppLogo />
    </div>
  );
};

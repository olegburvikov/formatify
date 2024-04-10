import { FC } from "react";
import styles from "./styles.module.scss";
import AppLogo from "../../assets/icons/logo.svg?react";

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <AppLogo />

      <nav className={styles.navigation}>
        <ul>
          <li>
            <a className={styles.externalLink} href="#">
              Donate
            </a>
          </li>
          <li>
            <a className={styles.externalLink} href="#">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

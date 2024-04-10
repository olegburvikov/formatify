import { FC } from "react";
import styles from "./styles.module.scss";

export const Editor: FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <button className={styles.getStartedButton}>
          Click to get started
        </button>
      </header>

      <main className={styles.main}></main>
    </div>
  );
};

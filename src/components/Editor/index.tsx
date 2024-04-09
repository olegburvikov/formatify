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

      <main className={styles.main}>
        <textarea // TODO: delete me please
          defaultValue={`{ hello: World }`}
          rows={30}
          style={{
            padding: "12px",
            background: "transparent",
            border: "none",
            color: "white",
            width: "100%",
          }}
        />
      </main>
    </div>
  );
};

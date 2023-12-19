import styles from "./Burger.module.scss";
import { useState } from "react";
import classNames from "classnames";
export const Burger = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={styles.burger}
      onClick={() => setActive((prevState) => !prevState)}
    >
      <span className={classNames(styles.line, active && styles.active)}></span>
      <span className={classNames(styles.line, active && styles.active)}></span>
      <span className={classNames(styles.line, active && styles.active)}></span>
    </div>
  );
};

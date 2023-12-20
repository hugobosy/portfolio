import { ComponentPropsWithoutRef, FC, useEffect, useRef } from "react";
import Typed from "typed.js";

import styles from "./TypedText.module.scss";

export interface TypedTextProps extends ComponentPropsWithoutRef<"div"> {
  textList: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  cursorChart?: string;
}

export const TypedText: FC<TypedTextProps> = ({
  textList,
  typeSpeed,
  backSpeed,
  backDelay,
  loop,
  cursorChart,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: textList,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      backDelay: backDelay,
      loop: loop,
      cursorChar: cursorChart,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text} ref={el} />
    </div>
  );
};

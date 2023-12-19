import styles from "./Navigation.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";
import { Burger } from "@/components/base/burger/Burger";

export interface NavigationProps extends ComponentPropsWithoutRef<"nav"> {
  links: string[];
}

export const Navigation: FC<NavigationProps> = ({ ...rest }) => {
  return (
    <nav className={styles.wrapper} {...rest}>
      <div className={styles.mobile}>
        <Burger />
      </div>
      <div className={styles.desktop}></div>
    </nav>
  );
};

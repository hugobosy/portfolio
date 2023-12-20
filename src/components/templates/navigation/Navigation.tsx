import styles from "./Navigation.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";
import { NavigationMobile } from "@/components/modules/navigation/NavigationMobile/NavigationMobile";
import { NavigationDesktop } from "@/components/modules/navigation/NavigationDesktop/NavigationDesktop";

export interface NavigationProps extends ComponentPropsWithoutRef<"nav"> {
  links: { text: string; href: string }[];
}

export const Navigation: FC<NavigationProps> = ({ links, ...rest }) => {
  return (
    <nav className={styles.wrapper} {...rest}>
      <NavigationMobile links={links} />
      <NavigationDesktop links={links} />
    </nav>
  );
};

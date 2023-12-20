import styles from "./NavigationDesktop.module.scss";
import { Button } from "@/components/base/button/Button";
import { FC } from "react";
import { NavigationProps } from "@/components/templates/navigation/Navigation";

export interface NavigationDesktopProps extends NavigationProps {}

export const NavigationDesktop: FC<NavigationDesktopProps> = ({ links }) => {
  return (
    <div className={styles.desktop}>
      {links?.map((link) => (
        <Button
          key={link.text}
          text={link.text}
          href={link.href}
          variant="link"
        />
      ))}
    </div>
  );
};

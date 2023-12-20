import styles from "./Navigation.module.scss";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { Burger } from "@/components/base/burger/Burger";
import classNames from "classnames";
import { Button } from "@/components/base/button/Button";

export interface NavigationProps extends ComponentPropsWithoutRef<"nav"> {
  links: { text: string; href: string }[];
}

export const Navigation: FC<NavigationProps> = ({ links, ...rest }) => {
  const [showMobileNavigation, setShowMobileNavigation] =
    useState<boolean>(false);
  return (
    <nav className={styles.wrapper} {...rest}>
      <div className={styles.mobile}>
        <Burger
          setShowMobileNavigation={setShowMobileNavigation}
          showMobileNavigation={showMobileNavigation}
        />
        <div
          className={classNames(
            styles["inner-mobile"],
            showMobileNavigation && styles.active,
          )}
        >
          {links?.map((link) => (
            <Button
              key={link.text}
              text={link.text}
              href={link.href}
              variant="link"
            />
          ))}
        </div>
      </div>
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
    </nav>
  );
};

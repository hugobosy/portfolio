import styles from "./NavigationMobile.module.scss";
import { Burger } from "@/components/base/burger/Burger";
import classNames from "classnames";
import { Button } from "@/components/base/button/Button";
import { FC, useState } from "react";
import { NavigationProps } from "@/components/templates/navigation/Navigation";

export interface NavigationMobileProps extends NavigationProps {}

export const NavigationMobile: FC<NavigationMobileProps> = ({ links }) => {
  const [showMobileNavigation, setShowMobileNavigation] =
    useState<boolean>(false);
  return (
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
  );
};

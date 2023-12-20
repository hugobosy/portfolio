import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  type?: "submit" | "button" | "reset";
  href?: string;
  text: string;
  variant?: "base" | "outline";
}

export const Button: FC<ButtonProps> = ({
  text,
  href,
  type,
  onClick,
  variant,
  className,
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    styles[`variant-${variant}`],
    href && styles.link,
    className,
  );
  const commonProps = {
    className: classes,
    onClick: onClick,
  };

  if (href) {
    return (
      <Link href={href} {...rest} {...commonProps}>
        {text}
      </Link>
    );
  }
  return (
    <button {...rest} type={type} {...commonProps}>
      {text}
    </button>
  );
};

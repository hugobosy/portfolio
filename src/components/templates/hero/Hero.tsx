import styles from "./Hero.module.scss";
import { Photo } from "@/components/modules/hero/Photo/Photo";
import { Introduction } from "@/components/modules/hero/Introduction/Introduction";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Photo />
      <Introduction />
    </div>
  );
};

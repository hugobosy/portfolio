import styles from "./Hero.module.scss";
import { Photo } from "@/components/modules/hero/Photo/Photo";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Photo />
    </div>
  );
};

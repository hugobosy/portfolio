import styles from "./Photo.module.scss";
import Image from "next/image";
import photo from "@/assets/image/photoPro.png";
export const Photo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <Image src={photo} alt="Hubert Kliszcz" className={styles.image} />
    </div>
  );
};

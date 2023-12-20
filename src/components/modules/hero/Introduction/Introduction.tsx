import styles from "./Introduction.module.scss";
import { Text } from "@/components/base/text/Text";
import { TypedText } from "@/components/base/typedText/TypedText";

export const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <Text
        tag="p"
        text="Introduction"
        fontFamily="montserrat"
        fontSize="sm"
        color="gray"
        isUppercase
        className={styles.introduction}
      />
      <Text tag="span" text="Cześć! Nazywam się" color="white" />
      <Text tag="span" text="Hubert, jestem" color="orange" />
      <TypedText
        textList={["dizajnerem", "developerem", "programistą"]}
        typeSpeed={60}
        backDelay={2000}
        backSpeed={60}
        cursorChart=""
      />
    </div>
  );
};

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
      <Text
        tag="span"
        text="Cześć! Nazywam się"
        color="white"
        fontFamily="inter"
        fontSize="lg"
      />
      <Text tag="span" text="Hubert, jestem" color="orange" fontSize="xl" />
      <TypedText
        textList={["Front-end Developerem"]}
        typeSpeed={60}
        backDelay={2000}
        backSpeed={60}
        cursorChart=""
      />
      <Text
        tag="p"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi laboriosam culpa, optio possimus quo necessitatibus voluptas, quidem ullam alias maiores"
        color="gray"
        fontSize="md"
      />
    </div>
  );
};

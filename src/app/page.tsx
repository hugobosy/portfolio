"use client"
import { Button } from "@/components/base/button/Button";
import {TypedText} from "@/components/base/typedText/TypedText";

export default function Home() {
  return (
    <main>
      <Button type="button" text="Button" />
        <TypedText textList={['Developer', 'Designer', 'Programmer']} backSpeed={80} backDelay={1500} typeSpeed={80} cursorChart=""/>
    </main>
  );
}

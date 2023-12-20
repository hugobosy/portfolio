"use client";
import { Navigation } from "@/components/templates/navigation/Navigation";
import { Menu } from "@/const/menu";

export default function Home() {
  return (
    <main>
      <Navigation links={Menu} />
    </main>
  );
}

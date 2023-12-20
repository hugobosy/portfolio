"use client";
import { Navigation } from "@/components/templates/navigation/Navigation";
import { Menu } from "@/const/menu";
import { Hero } from "@/components/templates/hero/Hero";

export default function Home() {
  return (
    <main>
      <Navigation links={Menu} />
      <Hero />
    </main>
  );
}

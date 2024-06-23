"use client";
import Image from "next/image";
import Intro from "@/app/components/intro";
import SectionDivider from "@/app/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  );
}

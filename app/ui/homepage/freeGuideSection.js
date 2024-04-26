import Image from "next/image";
import React from "react";
import PosterCard from "../components/posterCard";
import FreeGuideCard from "../components/freeGuideCard";

export default function FreeGuideSection() {
  return (
    <section className="mx-auto flex h-full w-screen max-w-8xl flex-col-reverse justify-evenly bg-white pb-10 lg:flex-row-reverse lg:pb-40">
      <PosterCard />
      <FreeGuideCard />
    </section>
  );
}

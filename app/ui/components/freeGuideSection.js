import Image from 'next/image';
import React from 'react'
import PosterCard from './posterCard';
import FreeGuideCard from './freeGuideCard';

export default function FreeGuideSection() {
  return (
    <section className="mx-auto flex h-full pb-10 lg:pb-40 w-screen max-w-8xl flex-col-reverse justify-evenly bg-white lg:flex-row-reverse">
      <PosterCard />
      <FreeGuideCard />
    </section>
  );
}

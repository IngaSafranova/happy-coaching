import React from 'react'
import HeroCard from '../components/heroCard';
import HeroSectionImage from '../components/heroSectionImage';

const text = {
  title: "I help people to discover their true potential",
  text: `I help people to discover their true potential and live a fulfiling
        life... Discover the simple 3 steps that I discovered to hack
        productivity. It just works and is backed by science. Wanna transform
        your life?`,
};

export default function HeroSection() {
  return (
      <section className='w-screen lg:max-w-8xl h-fit lg:h-790 pt-10 flex flex-col bg-seasalt lg:flex-row mx-auto'>
          <HeroCard title={text.title} text={text.text} className='lg:w-[600px] lg:h-[260px]'/>  
          <HeroSectionImage src='/pexels-andrea-piacquadio-3978564 1.jpg'className='mt-10'/>
    </section>
  )
}

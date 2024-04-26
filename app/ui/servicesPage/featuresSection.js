import React from 'react'
import HeroCard from '../components/heroCard';

const text = {
  title: "Are you ready to transform your life? ",
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
};
export default function FeaturesSection() {
  return (
    <section className="lg:h-1100 mx-auto flex h-fit w-screen flex-col bg-seasalt lg:max-w-8xl ">
   
        <HeroCard title={text.title} text={ text.text} className='mx-auto text-center lg:w-[700px]'/>
    
    </section>
  );
}

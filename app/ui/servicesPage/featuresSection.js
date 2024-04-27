import React from 'react'
import HeroCard from '../components/heroCard';
import FeaturesCard from './featuresCard';

const text = {
  title: "Are you ready to transform your life? ",
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
};
export default function FeaturesSection() {
  return (
    <section className="lg:h-1300 mx-auto flex mt-10 h-fit w-screen flex-col bg-seasalt lg:max-w-8xl ">
   
        <HeroCard title={text.title} text={ text.text} className='mx-auto text-center pt-16 lg:pt-0 lg:text-5xl lg:w-[700px]'/>
    <FeaturesCard/>
    </section>
  );
}

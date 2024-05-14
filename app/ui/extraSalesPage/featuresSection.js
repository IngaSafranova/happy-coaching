import React from 'react'
import FeaturesCard from '../components/featuresCard';
import FeaturesServices from './featuresCard';


export default function FeaturesSection() {
  return (
    <section className="mx-auto flex h-full w-screen max-w-8xl flex-col bg-white py-10 lg:h-fit">
      <div className=" mx-auto h-fit w-10/12 max-w-7xl pt-12 lg:w-7xl">
        <FeaturesCard
          title="Are you ready to transform your life?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam."
        />
        <FeaturesServices />
      </div>
    </section>
  );
}

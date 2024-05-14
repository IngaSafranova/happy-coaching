import React from 'react'
import Video from '../components/video'
import FeaturesCard from '../components/featuresCard';
import ExtraServicesCard from './extraServices';

export default function VideoSection() {
  return (
    <>
      <section className="lg:h-950 mx-auto flex h-full w-screen flex-col bg-seasalt  py-10 lg:max-w-8xl ">
        <div className='w-screen h-fit px-3 py-10'>
          <FeaturesCard
            title="Are you ready to transform your life?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam."
                  />
                  <ExtraServicesCard/>
        </div>
        <Video />
      </section>
    </>
  );
}

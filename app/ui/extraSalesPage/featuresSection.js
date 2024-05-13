import React from 'react'
import FeaturesCard from '../components/featuresCard';
import FeaturesServices from './featuresCard';


export default function FeaturesSection() {
  return (
    <section className="mx-auto pt-8 flex flex-col h-full w-screen max-w-8xl bg-white lg:h-fit">
      <div className=" mx-auto h-fit w-10/12 pt-12 max-w-7xl lg:w-7xl">
        <FeaturesCard title="Are you ready to transform your life?" />
<FeaturesServices/>
        {/* <ServicesCard /> */}
      </div>
    </section>
  );
}

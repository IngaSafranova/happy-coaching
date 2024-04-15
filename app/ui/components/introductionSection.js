import React from 'react'
import Vector from './vector';
import IntroductionCard from './introductionCard';
import ServicesCard from './servicesCard';

function IntroductionSection() {
  return (
    <section className="mx-auto flex h-full w-screen max-w-8xl flex-col-reverse justify-evenly lg:flex-row-reverse">
      <div className="mx-auto h-screen w-10/12 max-w-7xl bg-slate-100">
        <Vector className="mt-20 ml-12 fill-darkBlue" />
        <IntroductionCard />
        <ServicesCard />
        </div>
    </section>
  );
}

export default IntroductionSection
import React from 'react'
import Services from './services';

export default function ServicesSection() {
  return (
    <section className="lg:h-1000 mx-auto h-fit w-screen bg-white pt-10 lg:max-w-8xl">
      <div className="lg:w-920 py-10 lg:h-1000 mx-auto my-auto h-fit w-screen">
        <h2 className="text-3xl mx-auto pb-10 lg:pb-36 w-full text-center  font-extrabold text-darkBlue lg:w-[500px] lg:text-5xl lg:leading-[56px]">
          I can help you in these particular areas.
              </h2>
              <Services/>
      </div>
    </section>
  );
}

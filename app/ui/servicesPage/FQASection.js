import React from 'react'
import AccordationCard from '../components/accordationCard';
import Accordation from './accordation';
import MoreQuestions from './moreQuestions';

export default function FQASection() {
  return (
    <section className="mx-auto h-fit w-screen bg-white pt-10 lg:h-1000 lg:max-w-8xl">
      <div className="w-screenh-fit mx-auto mt-8 lg:h-24 lg:w-7xl">
        <h3 className="mx-auto w-full pb-5 text-center text-3xl font-extrabold  text-darkBlue lg:text-5xl lg:leading-[44px]">
          Good to know.
              </h3>
        <p className='text-center mx-auto w-fit p-2 pb-10 text-xl'>Everything you need to know about my services.</p>
        <Accordation />
        <MoreQuestions/>
      </div>
    </section>
  );
}

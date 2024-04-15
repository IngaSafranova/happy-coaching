import React from 'react'
import Vector from './vector';

function IntroductionSection() {
  return (
    <section className="mx-auto flex h-full w-screen max-w-8xl flex-col-reverse justify-evenly bg-seasalt lg:flex-row-reverse">
      <div className="mx-auto h-screen w-10/12 max-w-7xl bg-red-400">
        <Vector className="mt-20 fill-darkBlue" />
        <div className="mx-auto flex flex-col lg:h-[200] lg:w-[1034] lg:flex-row">
          <h2>I can help you in these particular areas</h2>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection
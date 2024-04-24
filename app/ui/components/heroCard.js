import React from 'react'
import LinkGuide from './freeGuide';

function HeroCard(props) {
  return (
    <div className="mx-auto  w-11/12 flex-col place-content-center sm:w-9/12 md:w-10/12 lg:ml-28 lg:h-[396px] lg:mt-36 lg:w-[545px] lg:py-24">
      <h1 className="h-auto px-4 py-6 text-3xl font-extrabold text-darkBlue md:text-5xl lg:w-[520px] lg:pl-0 lg:text-7xl">
       {props.title}
      </h1>
      <p className="px-4 py-6 text-xl leading-8 text-gray">
        {props.text}
      </p>

      <div className="my-6 w-fit mx-auto sm:mt-4">
        <LinkGuide className=" mx-auto sm:m-0" />
      </div>
    </div>
  );
}

export default HeroCard 
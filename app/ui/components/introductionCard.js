import React from 'react'

function IntroductionCard() {
  return (
    <div className=" w-11/12 mx-auto lg:ml-12 flex flex-col  gap-y-8 gap-x-[40px] mt-4  lg:h-[200px] lg:w-[1034px] lg:flex-row">
      <h2 className="font-extrabold   lg:leading-[56px] text-darkBlue lg:w-[500px] text-3xl lg:text-5xl">
        I can help you in these particular areas.
      </h2>
      <div className='lg:w-[480px] lg:pl-8 text-[17px] leading-[25px]  text-gray'>
        <p className='pb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          imperdiet massa tincidunt nunc pulvinar sapien. Nisl condimentum id
          venenatis.
        </p>
      </div>
    </div>
  );
}

export default IntroductionCard
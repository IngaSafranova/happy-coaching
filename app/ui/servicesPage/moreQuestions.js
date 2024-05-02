import React from 'react'
import Button from '../components/button';

export default function MoreQuestions() {
  return (
    <div className="mx-auto  flex h-fit w-screen   bg-seasalt lg:mt-4 lg:h-52 lg:w-7xl">
      <div className="mx-auto h-fit w-full flex flex-col justify-between lg:mt-8 lg:w-768">
        <h3 className="text-center text-xl font-extrabold text-darkBlue">
          Still have questions?
        </h3>
        <p className="py-3 text-center text-lg">
          Can&apos;t find the answer you &apos;re looking for? Please chat to
          our friendly team.
        </p>
<Button text='Get in touch' className='mx-auto mt-3'/>
        
      </div>
    </div>
  );
}

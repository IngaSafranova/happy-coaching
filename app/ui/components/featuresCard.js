import React from 'react'
import cn from '@/app/lib/cn'

export default function FeaturesCard({className, title, text}) {
  return (
    <div className={cn(" mx-auto h-fit w-fit lg:h-40 lg:w-768 ", className)}>
      <h2 className="text-4xl font-extrabold leading-[44px] text-center pb-5 text-darkBlue">
        {title}
      </h2>
      <p className='w-full h-fit text-xl text-center'>
        {text}
      </p>
    </div>
  );
}

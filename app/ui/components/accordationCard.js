'use client'

import Image from 'next/image';
import React,{useState} from 'react'



export default function AccordationCard({ title,text }) {
    
    const[isActive, setIsActive] = useState(false)

  return (
    <>
      <div className="mx-auto py-10 h-fit w-11/12 border-b-[1px] border-b-slate-400 lg:w-768">
        <div
          className=" flex cursor-pointer w-11/12 justify-between lg:w-768 "
          onClick={() => setIsActive(!isActive)}
        >
          <div className="text-lg w-11/12 font-medium pb-3 text-darkestBlue">{title}</div>
          <div className='w-6 h-6'>
            {isActive ? (
              <Image src="/minus.svg" alt="" width={22} height={22} />
            ) : (
              <Image src="/plus.svg" alt="" width={22} height={22} />
            )}
          </div>
        </div>
        {isActive && (
          <div className="lg:w-720 h-fit  w-fit text-base text-gray lg:h-12">
            {text}
          </div>
        )}
      </div>
    </>
  );
}

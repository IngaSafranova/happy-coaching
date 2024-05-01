'use client'

import Image from 'next/image';
import React,{useState} from 'react'



export default function AccordationCard({ title,text }) {
    
    const[isActive, setIsActive] = useState(false)

  return (
    <React.Fragment>
      <div className="mx-auto h-21 w-fit border-b-[1px] border-b-slate-400 lg:w-768">
        <div
          className="mx-auto flex h-21 w-fit gap-x-2 lg:w-768 "
          onClick={() => setIsActive(!isActive)}
        >
          <div className="text-lg font-medium text-darkBlue">{title}</div>
          <div>
            {isActive ? (
              <Image src="/plus.svg" alt="" width={22} height={22} />
            ) : (
              <Image src="/minus.svg" alt="" width={22} height={22} />
            )}
          </div>
        </div>
        {isActive && (
          <div className="lg:w-720 h-fit  w-fit text-base text-gray lg:h-12">
            {text}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

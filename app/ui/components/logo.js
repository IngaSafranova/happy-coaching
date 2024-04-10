import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='mb-4 text-center sm:mb-0'>
      <Image src="/Logo.png" width={128} height={28} alt="" />
    </div>
  );
}

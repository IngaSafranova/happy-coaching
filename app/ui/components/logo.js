import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='mb-4 text-center '>
      <Image src="/Logo.png" width='149' height='28' alt="" />
    </div>
  );
}

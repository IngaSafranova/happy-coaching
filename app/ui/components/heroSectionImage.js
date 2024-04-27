import React from 'react'
import Image from 'next/image'
import cn from '@/app/lib/cn'

function HeroSectionImage({src,className}) {
  return (
    <div className={cn("mx-auto w-5/6 sm:w-fit", className)}>
      <Image
        
    src={src}
    alt="profile picture of a smiling woman"
    width={462}
    height={603}
  />
</div>

  )
}

export default HeroSectionImage
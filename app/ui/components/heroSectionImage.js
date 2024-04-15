import React from 'react'
import Image from 'next/image'

function HeroSectionImage() {
  return (
 <div className="mx-auto w-5/6 sm:w-fit">
  <Image
    src="/pexels-andrea-piacquadio-3978564 1 (1).png"
    alt="profile picture of a smiling woman"
    width={462}
    height={603}
  />
</div>

  )
}

export default HeroSectionImage
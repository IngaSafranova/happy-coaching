import React from 'react'
import Image from 'next/image'

function HeroSectionImage(props) {
  return (
 <div className="mx-auto w-5/6 sm:w-fit">
      <Image
        {...props}
    src={props.src}
    alt="profile picture of a smiling woman"
    width={462}
    height={603}
  />
</div>

  )
}

export default HeroSectionImage
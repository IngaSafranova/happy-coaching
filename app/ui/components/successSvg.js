import React from 'react'
import Image from 'next/image';

function SuccessSvg() {
  return (
    <div className="relative top-4  mx-auto h-[104px] w-[237px] border border-none bg-white lg:-left-56 lg:top-14">
      <div className="mx-auto flex h-[56] w-[190] gap-x-4 p-5">
        <div className="h-[56] w-[56]">
          <Image src="/protection-target1.svg" alt="" width={56} height={56} />
        </div>
        <div className="h-[56] w-[117]">
          <Image src="/success.svg" alt="" width={117} height={56} />
        </div>
      </div>
    </div>
  );
}

export default SuccessSvg
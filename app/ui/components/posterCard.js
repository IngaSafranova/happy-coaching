import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import cn from '@/app/lib/cn';
import { usePathname } from 'next/navigation';


export default function PosterCard({className}) {

const pathName = usePathname()

  return (
    <div className="h-fit mx-auto lg:w-[500px] w-4/5 sm:w-fit lg:mr-10 relative">
      <div className='w-24 h-24 absolute -right-1 top-8 lg:right-0 lg:top-8 lg: bg-complimentaryGreen rounded-full flex  ml-10'>
        <Link
          href="/guide"
          className={cn(
            " w-24 rounded-full place-content-center px-1  bg-complimentaryGreen  text-white  hover:font-semibold",
            {
              "font-semibold text-darkBlue": pathName === "/guide",
            },
            className,
          )}
        >
          Free guide!
        </Link>
      </div>
      <Image
        src="/poster.png"
        width={446}
        height={581}
        alt="poster with the slogan: 'Are you ready to transform your life?'"
        className="mt-16"
      />
    </div>
  );
}

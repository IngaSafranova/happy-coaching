'use client'

import React, {useState} from 'react'
import NavLinks from './nav-links'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  //set state for navbar to open or close
  const [navbar, setNavbar] = useState(true)
  
  const pathName = usePathname()
  
  return (
    <div className="bg-white h-15">
      <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Image src="/Logo.png" width={128} height={28} alt="" className="" />
        <button
          className="text-3xl text-darkBlue  cursor-pointer relative w-8 h-8 sm:hidden"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <div>&#9776;</div> : <div>&times;</div>}
        </button>
        <div
          className={`flex flex-col md:flex-row md:gap-x-6 h-10 ${navbar ? "p-1 md:p-0 block" :"hidden" }`}
            
          
        >
          <nav
            className={`text-gray text-sm flex flex-col sm:flex-row gap-x-7 items-center `}
          >
            <NavLinks onClick={() => setNavbar(!navbar)} />
            <Link
              onClick={() => setNavbar(!navbar)}
              href="/guide"
              className={clsx(
                "bg-complimentaryGreen text-white px-3 py-1 mb-1 rounded hover:font-semibold",
                { "font-semibold text-darkBlue": pathName === "/guide" }
              )}
            >
              {" "}
              Get your free guide now
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}

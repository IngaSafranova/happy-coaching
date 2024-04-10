'use client'

import React, {useState} from 'react'
import NavLinks from './nav-links'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'



// NavbarButton component for toggle button
const NavbarButton = ({ onClick, navbar }) => (
  <button
    className="text-3xl text-darkBlue cursor-pointer absolute right-3  w-8 h-8 sm:hidden"
    onClick={onClick}
  >
    {navbar ? <div>&times;</div> : <div>&#9776;</div>}
  </button>
);

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  // Function to toggle navbar state
  const toggleNavbar = () => setNavbar(!navbar);
  
  const pathName = usePathname();
  return (
    <div className="bg-white h-15">
      <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Image src="/Logo.png" width={128} height={28} alt="" className="" />
        <NavbarButton onClick={toggleNavbar} navbar={navbar} />
        <div
          className={`flex-row md:gap-x-6 h-10 
          `}
        >
          <nav
            className={`text-gray text-sm flex flex-col  mt-14 sm:mt-0  w-screen sm:w-fit h-screen sm:bg-white sm:h-10 sm:flex-row gap-x-7 bg-blue-900  items-center ${navbar? 'flex' : 'hidden sm:flex'}

            `}
            
          >
            <NavLinks onClick={toggleNavbar} />
            <Link
              onClick={toggleNavbar}
              href="/guide"
              className={clsx(
                "bg-complimentaryGreen text-white px-3 py-1 mb-1 rounded hover:font-semibold",
                {
                  "font-semibold text-darkBlue": pathName === "/guide",
                }
              )}
            >
              Get your free guide now
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
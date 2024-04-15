'use client'

import React, {useState} from 'react'
import NavLinks from './nav-links'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './logo'
import DesktopNavLinks from './desktopNavLinks'
import MobileMenuButton from './mobileMenuButton'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  
  const [navbar, setNavbar] = useState(false);

  // Function to toggle navbar state
  const toggleNavbar = () => setNavbar(!navbar);

  const pathName = usePathname();
  
  return (
    <header className='w-screen'>
      <div className="bg-white h-16 position:absolute  top-0 left-0 right-0">
        <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
           <div className="hidden  h-16 py-6  md:flex flex-col justify-center"> 
            <Logo />
            <DesktopNavLinks />
          </div>{" "}
          <div className="md:hidden  flex flex-row my-4">
            <Logo />
            <div
              className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
                navbar ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Logo />
              <button
                className="absolute right-7 sm:right-10 z-20 top-4 p-3"
                onClick={toggleNavbar}
              >
                <FontAwesomeIcon
                  className="text-4xl text-darkBlue"
                  icon={faXmark}
                />
              </button>
              <nav className="flex flex-col justify-center items-center space-y-4 ">
                <NavLinks onClick={toggleNavbar} />
                <Link
                  href="/guide"
                  onClick={toggleNavbar}
                  className={clsx(
                    "bg-complimentaryGreen text-white px-3 py-1 mb-1 rounded hover:font-semibold",
                    {
                      "font-semibold text-darkBlue": pathName === "/guide",
                    }
                  )}
                >
                  Get your guide now
                </Link>
              </nav>
            </div>
            <MobileMenuButton onClick={toggleNavbar} />
            {/* <CloseMenuButton isOpen={navbar} onClose={toggleNavbar} /> */}
          </div>
        </section>
      </div>
    </header>
  );
}
"use client";

import React, { useState } from "react";
import NavLinks from "./nav-links";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import DesktopNavLinks from "./desktopNavLinks";
import MobileMenuButton from "./mobileMenuButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  // Function to toggle navbar state
  const toggleNavbar = () => setNavbar(!navbar);

  const pathName = usePathname();

  return (
     //<header className="w-screen max-w-6xl">
      <div className="position:absolute w-screen left-0 right-0  top-0 h-16 bg-white">
        <section className="mx-auto flex max-w-8xl w-screen items-center  justify-between p-4">
          <div className="hidden  h-16 flex-col max-w-6xl justify-center  py-6 md:flex">
            <Logo />
            <DesktopNavLinks />
          </div>{" "}
          <div className="my-auto  flex flex-row md:hidden">
            <Logo />
            <div
              className={`fixed right-0 top-0 z-10 flex h-full w-full transform flex-col items-center justify-center bg-white text-black transition-transform duration-300 ${
                navbar ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Logo />
              <button
                className="absolute right-7 top-4 z-20 p-3 sm:right-10"
                onClick={toggleNavbar}
              >
                <FontAwesomeIcon
                  className="text-4xl text-darkBlue"
                  icon={faXmark}
                />
              </button>
              <nav className="flex flex-col items-center justify-center space-y-4 ">
                <NavLinks onClick={toggleNavbar} />
                <Link
                  href="/guide"
                  onClick={toggleNavbar}
                  className={clsx(
                    "mb-1 rounded bg-complimentaryGreen px-3 py-1 text-white hover:font-semibold",
                    {
                      "font-semibold text-darkBlue": pathName === "/guide",
                    },
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
    // </header>
  );
}

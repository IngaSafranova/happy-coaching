import NavLinks from "./nav-links";
import Link from "next/link";
import React from 'react'
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function DesktopNavLinks() {
    const pathName = usePathname()
  return ( 
    <nav className=" absolute right-24 flex flex-row gap-x-6 lg:gap-x-10 lg:-mr-10 mr-5 mb-4">
      <NavLinks />
      <Link
        href="/guide"
        className={clsx(
          "bg-complimentaryGreen text-white w-fit px-5 py-1 lg:mb-1  rounded hover:font-semibold",
          {
            "font-semibold text-darkBlue": pathName === "/guide",
          }
        )}
      > 
        Get your guide now
      </Link>
    </nav>
  );
}

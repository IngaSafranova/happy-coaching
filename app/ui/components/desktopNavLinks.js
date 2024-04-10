import NavLinks from "./nav-links";
import Link from "next/link";
import React from 'react'
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function DesktopNavLinks() {
    const pathName = usePathname()
  return ( 
    <nav className=" absolute right-0 flex flex-row gap-x-6 mr-5 mb-4">
      <NavLinks />
      <Link
        href="/guide"
        className={clsx(
          "bg-complimentaryGreen text-white w-fit px-3 py-1  rounded hover:font-semibold",
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

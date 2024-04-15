import NavLinks from "./nav-links";
import Link from "next/link";
import React from 'react'
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LinkGuide from "./freeGuide";

export default function DesktopNavLinks() {
    const pathName = usePathname()
  return (
    <nav className=" absolute right-24 mb-2 mr-5 flex flex-row gap-x-6 md:gap-x-5 lg:-mr-10 lg:gap-x-10">
      <NavLinks />
      {/* <Link
        href="/guide"
        className={clsx(
          "bg-complimentaryGreen text-white w-fit px-5 py-1 lg:mb-1  rounded hover:font-semibold",
          {
            "font-semibold text-darkBlue": pathName === "/guide",
          }
        )}
      > 
        Get your guide now
      </Link> */}
      <div className="pb-3">
        <LinkGuide />
      </div>
    </nav>
  );
}

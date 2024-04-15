import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";


export default function LinkGuide({className }) {
    
    const pathName = usePathname()
    
    return (
  <Link
    href="/guide"
    className={clsx(
      "w-fit rounded bg-complimentaryGreen px-5 py-2  text-white  hover:font-semibold lg:mb-1",
      {
        "font-semibold text-darkBlue": pathName === "/guide",
      },className
    )}
  >
    Get your free guide now
        </Link>
    )
}
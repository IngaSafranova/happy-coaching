import NavLinks from "./nav-links";

import React from "react";
import { usePathname } from "next/navigation";

import LinkGuide from "./freeGuide";

export default function DesktopNavLinks() {
  const pathName = usePathname();
  return (
    <nav className=" absolute lg:max-w-5xl lg:right-24 right-0 mb-2 mr-5 flex flex-row gap-x-6 md:gap-x-5 lg:-mr-10 lg:gap-x-10">
      <NavLinks />

      <div className="pb-3 mr-0">
        <LinkGuide />
      </div>
    </nav>
  );
}

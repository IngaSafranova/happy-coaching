import NavLinks from "./nav-links";

import React from "react";
import { usePathname } from "next/navigation";

import LinkGuide from "./freeGuide";

export default function DesktopNavLinks() {
  const pathName = usePathname();
  return (
    <nav className=" absolute right-0 mb-2 mr-5 flex flex-row gap-x-6 md:gap-x-5 lg:right-24 lg:-mr-10 lg:max-w-5xl lg:gap-x-10">
      <NavLinks />

      <div className="mr-0 pb-3">
        <LinkGuide text="Get your free guide now" />
      </div>
    </nav>
  );
}

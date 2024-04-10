'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: " Extra SalesPage",
    href: "/extra",
  },
];

function NavLinks({onClick}) {

  const pathName = usePathname()
  return (
   <>
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "text-gray hover:text-darkBlue hover:font-semibold ",
                    {
                      "font-semibold text-darkBlue": pathName === link.href,
                    }
                  )}
                  onClick={onClick}
                >
                  <p>{link.name}</p>
                </Link>
              );
           })}
           
           
      </>
  );
}

export default NavLinks

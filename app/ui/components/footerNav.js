import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
    {
        name: 'Free guide',
         href:"/guide"
  }
];


export default function FooterNav({onClick}) {
const pathName = usePathname()

  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-extrabold pb-4 text-darkBlue">Pages</h3>

      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-gray 50 opacity pb-4 text-base hover:font-semibold hover:text-darkBlue",
              {
                "font-semibold text-darkBlue": pathName === link.href,
              },
            )}
            onClick={onClick}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

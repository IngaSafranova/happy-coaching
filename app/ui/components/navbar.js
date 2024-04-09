'use client'

import React from 'react'
import NavLinks from './nav-links'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathName = usePathname()
  return (
    <div className="bg-white h-15">
      <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Image src="/Logo.png" width={128} height={28} alt="" className="" />
        <button className="text-3xl text-darkBlue sm:hidden cursor-pointer relative w-8 h-8">
          &#9776;
        </button>
        <div className="flex flex-col md:flex-row md:gap-x-6 h-10">
          <nav className="text-gray text-sm flex flex-col sm:flex-row gap-x-7 items-center">
            <NavLinks />
            <Link
              href="/guide"
              className={clsx(
                "bg-complimentaryGreen text-white px-3 py-1 mb-1 rounded hover:font-semibold",
                { "font-semibold text-darkBlue": pathName ==='/guide' }
              )}
            >
              Get your free guide now
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}

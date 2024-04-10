import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLinks from './nav-links';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function CloseMenuButton({isOpen, onClose }) {
    const pathName = usePathname()
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-5xl" icon={faXmark} />
      </button>
      <nav className="flex flex-col justify-center items-center space-y-4">
              <NavLinks onClick={!isOpen } />
        <Link
          href="/guide"
          className={clsx(
            "bg-complimentaryGreen text-white px-3 py-1 mb-1 rounded hover:font-semibold",
            {
              "font-semibold text-darkBlue": pathName === "/guide",
            }
          )}
        />
      </nav>
    </div>
  );
}

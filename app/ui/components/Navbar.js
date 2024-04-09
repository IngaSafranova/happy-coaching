import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="bg-white h-15">
      <section className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <Image src="/Logo.png" width={128} height={28} alt="" className=''/>
        <button className="text-3xl text-darkBlue sm:hidden cursor-pointer relative w-8 h-8">
          &#9776;
        </button>
        <div className='flex flex-col md:flex-row md:gap-x-6 h-10'>
          <nav className="text-gray text-sm flex flex-col sm:flex-row gap-x-7">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/extra">Extra SalesPage</Link>
          </nav>

          <button className="bg-complimentaryGreen text-white px-3 rounded">
            Get your free guide now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Navbar

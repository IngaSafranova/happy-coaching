import Link from 'next/link';
import React from 'react'

export default function Contact() {
  return (
    <div className="50 opacity h-full text-base text-gray">
      <h3 className="pb-4 text-sm font-extrabold text-darkBlue">Contact</h3>
      <Link href="tel:+123456789">+123 456 789</Link>
      <p className="pt-4">
        Email:
        <Link href="mailto:hello@happydigital.nl">hello@happydigital.nl</Link>
      </p>
      <p className="pt-4">Instagram</p>
      <p className="pt-4">LinkedIn</p>
    </div>
  );
}

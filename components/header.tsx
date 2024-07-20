import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl">Blog</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-green-500 font-bold">
            Home
          </Link>
          <Link href="/about" className="text-green-500 font-bold">
            About
          </Link>
          <Link href="/contact" className="text-green-500 font-bold">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

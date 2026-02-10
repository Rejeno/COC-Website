// components/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavbarProps {
  fontClass: string;
}

export default function Navbar({ fontClass }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ARTICLES', href: '/news' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <nav className="w-full relative">
      <div className="flex h-20 items-center justify-between">
        
        {/* 1. LEFT: Logo + Brand Name */}
        <div className="flex items-center gap-3 z-20">
          {/* LOGO IMAGE:
             - 'hidden': Hides it on mobile (default)
             - 'md:block': Shows it on tablet/desktop
          */}
          <div className="hidden md:block relative w-15 h-15">
            <Image
              src="/logo.png"
              alt="Caffeinated Spaces Logo"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Brand Text (Always visible) */}
          <div className={`${fontClass} text-lg md:text-xl font-bold tracking-tight text-brand-brown uppercase`}>
            Caffeinated Spaces
          </div>
        </div>

        {/* 2. CENTER: Desktop Menu (True Center) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  ${fontClass} text-sm font-medium transition-all duration-200 uppercase tracking-wide pb-1 border-b-2
                  ${isActive 
                    ? 'text-gray-900 border-[#6D7E5E]' 
                    : 'text-gray-500 border-transparent hover:text-[#6D7E5E]'
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* 3. RIGHT: Social Icon + Mobile Toggle */}
        <div className="flex items-center gap-4 z-20">
          {/* Facebook Icon (Visible on Desktop) */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-brand-dark hover:opacity-80 transition-opacity"
            aria-label="Visit our Facebook page"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg md:hidden z-50 flex flex-col p-5 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${fontClass} text-lg font-semibold text-gray-800 border-b border-transparent hover:text-[#6D7E5E]`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gray-200 w-full my-2"></div>
           <a href="https://facebook.com" className="flex items-center gap-2 text-gray-800 font-medium">
             <span>Visit us on Facebook</span>
           </a>
        </div>
      )}
    </nav>
  );
}
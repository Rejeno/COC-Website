// app/components/MobileMenu.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { montserrat } from '../../lib/font';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger button – always visible on mobile */}
      <button
        className="md:hidden p-2 text-brand-dark"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className={`${montserrat.className} text-xl font-bold text-brand-brown`}>
                Menu
              </h2>
              <button onClick={() => setIsOpen(false)}>
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link href="/" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/news" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>
                Articles
              </Link>
              <Link href="/about" className="hover:text-brand-green transition-colors" onClick={() => setIsOpen(false)}>
                About us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
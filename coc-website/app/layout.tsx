import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '../lib/font';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Caffeinated Spaces – Iloilo Coffee Culture',
  description: 'Discover the stories, beans, brews, and spaces of Iloilo City’s coffee scene.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable}
          font-sans
          antialiased
          bg-white
          text-gray-900
          flex flex-col min-h-screen
        `}
      >
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
             <Navbar fontClass={montserrat.className} />
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        {/* ── Footer Wrapper ────────────────────────────────────────────── */}
        <footer className="bg-[#1B383E] text-white flex flex-col">
          
          {/* 1. Main Footer Content (Relative for the bean background) */}
          <div className="relative w-full overflow-hidden">
            
            {/* Decorative Bean Background */}
            <div className="absolute bottom-0 -mr-6 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-20 md:opacity-40 pointer-events-none">
              <Image
                src="/footer.png"
                alt="Footer decorative coffee bean"
                fill
                className="object-contain"
                style={{ transform: 'rotate(0deg)' }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16">
              
              {/* CHANGED: Used flex-row and justify-between on desktop to push left/right sections apart */}
              <div className="flex flex-col lg:flex-row justify-between gap-10 mb-8">
                
                {/* Left Side: Brand Info (Restricted width on desktop) */}
                <div className="w-full lg:w-5/12 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className=" relative w-12 h-12">
                      <Image
                        src="/logo.png"
                        alt="Caffeinated Spaces Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className={`${montserrat.className} text-xl md:text-2xl font-bold tracking-tight`}>
                      Caffeinated Spaces
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-md">
                    Caffeinated Spaces is a website created by journalism students to explore and celebrate the evolving coffee culture in Iloilo City.
                  </p>

                  <div className="flex items-center gap-4">
                    <a href="#" className="text-white hover:text-[#6D7E5E] transition-colors">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex justify-center md:justify-start lg:mt-12 md:4 mt-4 ">
                    <BackToTop />
                  </div>
                </div>

                {/* Right Side: Links Section 
                    - pt-3: Pushes the titles down slightly to align with "Caffeinated Spaces"
                    - gap-12/16: Controls how close the two columns are to each other 
                */}
                <div className="w-full lg:mr-16 lg:w-auto flex flex-row gap-8 md:gap-12 lg:gap-24 lg:pt-3">
                  
                  {/* Column 1: Districts */}
                  <div className="flex-1 md:flex-none">
                    {/* CHANGED: Reduced title size to md:text-base */}
                    <h3 className={`${montserrat.className} text-base md:text-base font-bold uppercase tracking-wide mb-4 md:mb-6`}>
                      Iloilo Districts
                    </h3>
                    {/* CHANGED: Reduced text size to md:text-sm */}
                    <ul className="space-y-3 text-xs md:text-sm opacity-90 font-normal">
                      {[
                        "District of Iloilo City",
                        "District of Jaro",
                        "District of Molo",
                        "District of Mandurriao",
                        "District of Villa",
                        "District of Lapuz",
                        "District of La Paz",
                      ].map((district) => (
                        <li key={district}>
                          <Link href="#" className="hover:text-[#6D7E5E] transition-colors uppercase block">
                            {district}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Navigation */}
                  <div className="flex-1 md:flex-none">
                    {/* CHANGED: Reduced title size to md:text-base */}
                    <h3 className={`${montserrat.className} text-base md:text-base font-bold uppercase tracking-wide mb-4 md:mb-6`}>
                      Navigation
                    </h3>
                    {/* CHANGED: Reduced text size to md:text-sm */}
                    <ul className="space-y-3 text-xs md:text-sm opacity-90 font-normal">
                      <li><Link href="/" className="hover:text-[#6D7E5E] transition-colors block">HOME PAGE</Link></li>
                      <li><Link href="/news" className="hover:text-[#6D7E5E] transition-colors block">ARTICLE PAGE</Link></li>
                      <li><Link href="/about" className="hover:text-[#6D7E5E] transition-colors block">ABOUT US</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Green Copyright Bar (Full Width, Very Bottom) */}
          <div className="w-full bg-[#6D7E5E] py-2 relative z-20">
            <p className="text-center text-xs md:text-sm font-medium text-white opacity-90 px-4">
              Copyright © 2026, Caffeinated Spaces. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '../lib/font';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Caffeinated Spaces – Iloilo Coffee Culture',
  description: 'Discover the stories, beans, brews, and spaces of Iloilo Citys coffee scene.',
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

          {/* 1. Main Footer Content */}
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

              <div className="flex flex-col lg:flex-row justify-between gap-10 mb-8">

                {/* ── Left Side: Brand Info ── */}
                <div className="w-full lg:w-5/12 flex flex-col gap-6">

                  {/* Logo + Name */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/logoFinalWhite.png"
                        alt="Caffeinated Spaces Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className={`${montserrat.className} text-xl md:text-2xl font-bold tracking-tight`}>
                      Caffeinated Spaces
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-md">
                    Caffeinated Spaces is a website created by journalism students from West Visayas State University to explore and celebrate the evolving coffee culture in Iloilo City.
                  </p>

                  {/* Facebook & QR Code */}
                  <div className="flex flex-row items-center gap-16 md:gap-24 mt-2">
                    
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/profile.php?id=61587123767644" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6D7E5E] transition-colors">
                      <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    {/* QR Code */}
                    <div className="flex flex-col items-center ml-20 w-[82px] gap-2">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfM5y-AjmkBv5Uap4TtiLfQpyfvRZ8fWOyJ0_HTsfIy_zQK0Q/viewform?fbclid=IwY2xjawP8Ee5leHRuA2FlbQIxMABicmlkETFxZ0tSQzFsSGEzRUowMUs5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhTHgCJ2wuNKYhOtf45PL9Z4yLvHirTmLnkQLkAQVwUOBKjUU8kwjukdzUBf_aem_qg5g4EU_EB0jFsboBE1rGg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group cursor-pointer"
                      >
                        <div className="overflow-hidden transition-opacity duration-200 group-hover:opacity-75">
                          <Image
                            src="/QR.png"
                            alt="QR Code to Caffeinated Spaces"
                            width={112}
                            height={112}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-xs w-[112px] text-center uppercase tracking-widest opacity-50 font-semibold group-hover:opacity-100 transition-opacity duration-200">
                          Give us a Feedback
                        </p>
                      </a>
                    </div>
                  </div>

                  {/* Back to Top */}
                  <div className="flex justify-start mt-4">
                    <BackToTop />
                  </div>

                </div>
                {/* ── End Left Side ── */}

                {/* ── Right Side: Links ── */}
                <div className="w-full lg:mr-16 lg:w-auto flex flex-row gap-8 md:gap-12 lg:gap-24 lg:pt-3">

                  {/* Column 1: Districts */}
                  <div className="flex-1 md:flex-none">
                    <h3 className={`${montserrat.className} text-base font-bold uppercase tracking-wide mb-4 md:mb-6`}>
                      Iloilo Districts
                    </h3>
                    <ul className="space-y-3 text-xs md:text-sm opacity-90 font-normal">
                      {/* CHANGED: Converted to objects with filterName and updated Link logic */}
                      {[
                        { name: "District of Iloilo City", filterName: "Iloilo City" },
                        { name: "District of Jaro", filterName: "Jaro" },
                        { name: "District of Molo", filterName: "Molo" },
                        { name: "District of Mandurriao", filterName: "Mandurriao" },
                        { name: "District of Villa", filterName: "Villa" },
                        { name: "District of Lapuz", filterName: "Lapuz" },
                        { name: "District of La Paz", filterName: "La Paz" },
                      ].map((district) => (
                        <li key={district.filterName}>
                          <Link 
                            href={`/news?district=${encodeURIComponent(district.filterName)}`} 
                            className="hover:text-[#6D7E5E] transition-colors uppercase block"
                          >
                            {district.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Navigation */}
                  <div className="flex-1 md:flex-none">
                    <h3 className={`${montserrat.className} text-base font-bold uppercase tracking-wide mb-4 md:mb-6`}>
                      Navigation
                    </h3>
                    <ul className="space-y-3 text-xs md:text-sm opacity-90 font-normal">
                      <li><Link href="/" className="hover:text-[#6D7E5E] transition-colors block">HOME PAGE</Link></li>
                      <li><Link href="/news" className="hover:text-[#6D7E5E] transition-colors block">ARTICLE PAGE</Link></li>
                      <li><Link href="/about" className="hover:text-[#6D7E5E] transition-colors block">ABOUT US</Link></li>
                    </ul>
                  </div>

                </div>
                {/* ── End Right Side ── */}

              </div>
            </div>
          </div>

          {/* 2. Green Copyright Bar */}
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
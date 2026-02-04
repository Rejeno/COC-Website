import type { Metadata } from 'next';
import { montserrat } from '../lib/font';
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
        `}
      >
        {/* Navigation – will be visible on all pages */}
        <header className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo / Brand name */}
              <div className="text-2xl font-semibold tracking-tight">
                Caffeinated Spaces
              </div>

              {/* Main navigation */}
              <nav className="hidden md:flex items-center gap-10">
                <a href="/landing" className="text-base hover:text-[#6D7E5E] transition-colors">
                  Home
                </a>
                <a
                  href="/news"
                  className="relative text-base text-[#6D7E5E]"
                >
                  News
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#6D7E5E] rounded-full" />
                </a>
                <a href="/about" className="text-base hover:text-[#6D7E5E] transition-colors">
                  About
                </a>
              </nav>

              {/* Mobile menu button (we'll add later if needed) */}
              <button className="md:hidden">Menu</button>
            </div>
          </div>
        </header>

        {/* All page content will go here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
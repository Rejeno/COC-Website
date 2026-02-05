import type { Metadata } from 'next';
import { montserrat } from '../lib/font';
import './globals.css';
import Navbar from './components/Navbar';

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
        {/* Navigation */}
        <header className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo / Brand name */}
              <div className={`${montserrat.className} text-base uppercase font-semibold tracking-tight`}>
                WVSU News
              </div>

              {/* Desktop Nav and Social Icon */}
              <div className="flex items-center gap-6">
                <div className="hidden md:block">
                  <Navbar fontClass={montserrat.className} />
                </div>

                {/* Facebook Link */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark hover:opacity-80 transition-opacity"
                  aria-label="Visit our Facebook page"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Mobile menu button */}
                <button className="md:hidden p-2 text-gray-600">Menu</button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
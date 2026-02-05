// app/components/Navbar.tsx
'use client'; // 👈 This is required for hooks

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ fontClass }: { fontClass: string }) {
    const pathname = usePathname(); // Get current route

    // Helper to determine styling
    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`${fontClass} flex w-5xl justify-center gap-20 pr-20`}>
            <Link
                href="/"
                className={`relative text-base transition-colors ${isActive('/')
                    ? "text-brand-green font-base" // Base active text styles
                    : "text-black hover:text-brand-green" // Inactive styles
                    } ${isActive('/')
                        ? // The Custom Underline Styles
                        "after:content-[''] after:absolute after:justify-center after:-right-4 after:-bottom-1 " +
                        "after:h-0.75 after:w-20 after:bg-brand-green after:rounded-full"
                        : ""
                    }`}
            >
                Home
            </Link>

            <Link
                href="/news"
                className={`relative text-base transition-colors ${isActive('/news')
                    ? "text-brand-green font-base " +
                    // Active: Custom rounded underline
                    "after:content-[''] after:absolute after:-right-4.5 after:-bottom-1 " +
                    "after:h-0.75 after:w-20 after:bg-brand-green after:rounded-full"
                    : "text-black hover:text-brand-green"
                    }`}
            >
                News
            </Link>

            <Link
                href="/about"
                className={`relative text-base transition-colors ${isActive('/about')
                    ? "text-brand-green font-base " +
                    // Active: Custom rounded underline
                    "after:content-[''] after:absolute after:-right-4 after:-bottom-1 " +
                    "after:h-0.75  after:w-20 after:bg-brand-green after:rounded-full"
                    : "text-black hover:text-brand-green"
                    }`}
            >
                About
            </Link>

        </nav>

    );
}
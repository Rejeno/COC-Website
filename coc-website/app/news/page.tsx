"use client";

import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { montserrat } from '../../lib/font'; // Adjust path if needed

// --- 1. Constants ---

const CATEGORIES = [
  "Jaro",
  "Iloilo City",
  "Molo",
  "Lapuz",
  "La Paz",
  "Villa",
  "Mandurriao",
];

const SIDEBAR_POSTS = [
  {
    title: "Top Hidden Gems: Top Cafes in Iloilo City Districts.",
    date: "February 04, 2026",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=200",
  },
  {
    title: "The Ultimate Guide to Iloilo Coffee Crawl.",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=200",
  },
  {
    title: "Barista's Choice: Best Beans in Town.",
    date: "February 12, 2026",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=200",
  },
];

// --- 2. Main Components ---

function NewsContent() {
  const searchParams = useSearchParams();
  
  // Default to "Jaro" or URL param
  const [activeFilter, setActiveFilter] = useState("Jaro");

  // Sync with URL
  useEffect(() => {
    const districtParam = searchParams.get("district");
    if (districtParam && CATEGORIES.includes(districtParam)) {
      setActiveFilter(districtParam);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className={`${montserrat.className} text-4xl md:text-6xl font-bold text-brand-brown pt-2 md:pt-17 mb-8`}>
            Discover our Latest Articles
          </h1>
          <p className={`${montserrat.className} text-[#636262] w-auto md:w-300 mx-auto text-base md:text-2xl`}>
            Discover the unique coffee blogs. From groundbreaking cafe to
            industry level ones, we take pride in our blog collections.
          </p>
        </div>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                window.history.pushState(null, '', `?district=${encodeURIComponent(category)}`);
              }}
              className={`${montserrat.className} w-37 h-9 px-8 py-1 rounded-sm text-sm md:text-base font-semibold transition-colors duration-200 ${
                activeFilter === category
                  ? "bg-brand-green text-white"
                  : "bg-[#EAEAEA] text-black cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Main Articles Area */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <h2 className={`${montserrat.className} text-xl md:text-4xl font-semibold text-brand-brown whitespace-nowrap`}>
                Coffee runs in our veins
              </h2>
              <div className="h-[0.5px] bg-brand-light-gray w-full mt-2"></div>
            </div>

            {/* CARDS CONTAINER */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">

              {/* ─── JARO ARTICLES ───────────────────────────── */}
              {activeFilter === "Jaro" && (
                <>
                  <ArticleCard
                    title="Coffee Studio"
                    category="Iloilo City"
                    date="04 Feb"
                    imageUrl="/CStudio/4.jpg"
                    link="/news/city-proper/coffee-studio"
                  />
                  <ArticleCard
                    title="Palpitate"
                    category="Iloilo City"
                    date="06 Feb"
                    imageUrl="/Palpitate/1.jpg"
                    link="/news/city-proper/palpitate"
                  />
                </>
              )}

              {/* ─── ILOILO CITY ARTICLES ────────────────────── */}
              {activeFilter === "Iloilo City" && (
                <>
                  <ArticleCard
                    title="Coffee Studio"
                    category="Iloilo City"
                    date="04 Feb"
                    imageUrl="/CStudio/4.jpg"
                    link="/news/city-proper/coffee-studio"
                  />
                  <ArticleCard
                    title="Palpitate"
                    category="Iloilo City"
                    date="06 Feb"
                    imageUrl="/Palpitate/1.jpg"
                    link="/news/city-proper/palpitate"
                  />
                </>
              )}

              {/* ─── MOLO ARTICLES ───────────────────────────── */}
              {activeFilter === "Molo" && (
                <>
                  <ArticleCard
                    title="Coffee Studio"
                    category="Iloilo City"
                    date="04 Feb"
                    imageUrl="/CStudio/4.jpg"
                    link="/news/city-proper/coffee-studio"
                  />
                  <ArticleCard
                    title="Palpitate"
                    category="Iloilo City"
                    date="06 Feb"
                    imageUrl="/Palpitate/1.jpg"
                    link="/news/city-proper/palpitate"
                  />
                </>
              )}

              {/* ─── LAPUZ ARTICLES ──────────────────────────── */}
              {activeFilter === "Lapuz" && (
                <>
                  <ArticleCard
                    title="Coffee Studio"
                    category="Iloilo City"
                    date="04 Feb"
                    imageUrl="/CStudio/4.jpg"
                    link="/news/city-proper/coffee-studio"
                  />
                  <ArticleCard
                    title="Palpitate"
                    category="Iloilo City"
                    date="06 Feb"
                    imageUrl="/Palpitate/1.jpg"
                    link="/news/city-proper/palpitate"
                  />
                </>
              )}

              {/* ─── LA PAZ ARTICLES ─────────────────────────── */}
              {activeFilter === "La Paz" && (
                <>
                  <ArticleCard
                    title="Coffee Studio"
                    category="Iloilo City"
                    date="04 Feb"
                    imageUrl="/CStudio/4.jpg"
                    link="/news/city-proper/coffee-studio"
                  />
                  <ArticleCard
                    title="Palpitate"
                    category="Iloilo City"
                    date="06 Feb"
                    imageUrl="/Palpitate/1.jpg"
                    link="/news/city-proper/palpitate"
                  />
                </>
              )}

              {/* ─── VILLA ARTICLES ──────────────────────────── */}
              {activeFilter === "Villa" && (
                <>
                  <ArticleCard
                    title="Coffee Studio"
                    category="Iloilo City"
                    date="04 Feb"
                    imageUrl="/CStudio/4.jpg"
                    link="/news/city-proper/coffee-studio"
                  />
                  <ArticleCard
                    title="Palpitate"
                    category="Iloilo City"
                    date="06 Feb"
                    imageUrl="/Palpitate/1.jpg"
                    link="/news/city-proper/palpitate"
                  />
                </>
              )}

              {/* ─── MANDURRIAO ARTICLES ─────────────────────── */}
              {activeFilter === "Mandurriao" && (
                <>
                  <ArticleCard
                    title="Coffee Studio"
                    category="Iloilo City"
                    date="04 Feb"
                    imageUrl="/CStudio/4.jpg"
                    link="/news/city-proper/coffee-studio"
                  />
                  <ArticleCard
                    title="Palpitate"
                    category="Iloilo City"
                    date="06 Feb"
                    imageUrl="/Palpitate/1.jpg"
                    link="/news/city-proper/palpitate"
                  />
                </>
              )}

            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-12">
            <SidebarSection title="Featured" items={SIDEBAR_POSTS} />
            <SidebarSection title="Districts" items={SIDEBAR_POSTS} />
          </aside>
        </div>
      </main>
    </div>
  );
}

// WRAPPER
export default function NewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <NewsContent />
    </Suspense>
  );
}

// --- 3. Sub-Components ---

// Individually Editable Props
type ArticleCardProps = {
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  link: string;
};

function ArticleCard({ title, category, date, imageUrl, link }: ArticleCardProps) {
  return (
    <Link href={link} className="group relative w-full aspect-4/5 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow block">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
      <div className={`${montserrat.className} absolute bottom-0 left-0 p-3 md:p-6 text-white w-full`}>
        <div className="flex items-center text-xs tracking-wider mb-2 opacity-90 md:opacity-80">
          <span>Category . {category}</span>
          <span className="ml-1 md:ml-3 mr-1">|</span>
          <span>{date}</span>
        </div>
        <h3 className="text-base md:text-2xl font-bold leading-tight mb-2">
          {title}
        </h3>
      </div>
    </Link>
  );
}

function SidebarSection({ title, items }: { title: string; items: any[] }) {
  return (
    <div>
      <div className="flex items-center gap-4 mt-2 mb-6">
        <h3 className={`${montserrat.className} text-lg md:text-xl font-semibold text-accent-brown`}>{title}</h3>
        <div className="h-[0.5px] bg-brand-light-gray w-full mt-1"></div>
      </div>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div key={`${title}-${index}`} className="flex gap-4 group cursor-pointer">
            <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`${montserrat.className} text-xs md:text-sm text-[#939393] mb-1`}>{item.date}</span>
              <h4 className={`${montserrat.className} text-sm md:text-base font-semibold text-[#585858] leading-snug group-hover:text-[#8B5E3C] transition-colors`}>
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
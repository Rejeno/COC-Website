"use client";

import { useState } from "react";
import { montserrat } from '../../lib/font';

// --- 1. Types & Mock Data ---

type Article = {
    id: string;
    title: string;
    category: string; // This matches our filter buttons
    date: string;
    imageUrl: string;
    isFeatured?: boolean;
};

// The categories shown in your buttons
const CATEGORIES = [
    "Jaro",
    "Iloilo City",
    "Molo",
    "Lapuz",
    "La Paz",
    "Villa",
    "Mandurriao",
];

// Mock data to simulate your CMS or Database
const MOCK_ARTICLES: Article[] = [
    {
        id: "1",
        title: "Top Gems in Jaro District Life In a way.",
        category: "Jaro",
        date: "03 Feb",
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "2",
        title: "Hidden Coffee Spots in Molo You Must Visit",
        category: "Molo",
        date: "04 Feb",
        imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "3",
        title: "The Best Brews in La Paz Market",
        category: "La Paz",
        date: "03 Feb",
        imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4",
        title: "Mandurriao After Dark: Cafe Edition",
        category: "Mandurriao",
        date: "05 Feb",
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "5",
        title: "Villa Beach Cafes with a View",
        category: "Villa",
        date: "02 Feb",
        imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "6",
        title: "Old World Charm in Jaro",
        category: "Jaro",
        date: "01 Feb",
        imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800",
    },
    // Adding more Jaro items to demonstrate filtering
    {
        id: "7",
        title: "Another Jaro Coffee Spot",
        category: "Jaro",
        date: "03 Feb",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    },
];

// Mock data for the sidebar (Featured & Districts lists)
const SIDEBAR_POSTS = [
    {
        id: "101",
        title: "Top Hidden Gems: Top Cafes in Iloilo City Districts.",
        date: "February 04, 2026",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: "102",
        title: "Top Hidden Gems: Top Cafes in Iloilo City Districts.",
        date: "February 04, 2026",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: "103",
        title: "Top Hidden Gems: Top Cafes in Iloilo City Districts.",
        date: "February 04, 2026",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=200",
    },
];

// --- 2. Components ---

export default function NewsPage() {
    // STATE: This controls the active filter
    const [activeFilter, setActiveFilter] = useState("Jaro"); // Defaulting to Jaro as per image active state

    // FILTER LOGIC: If "All" is selected, show everything, otherwise match category
    const filteredArticles =
        activeFilter === "All"
            ? MOCK_ARTICLES
            : MOCK_ARTICLES.filter((article) => article.category === activeFilter);

    return (
        <div className="min-h-screen bg-white text-gray-800 pb-20">

            {/* Main Content Container */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-12">

                {/* Page Header Area */}
                <div className="text-center mb-12">
                    <h1 className={`${montserrat.className} text-4xl md:text-6xl font-bold text-brand-brown pt-2 md:pt-17 mb-8`}>
                        Discover our Latest Articles
                    </h1>
                    <p className={`${montserrat.className} text-[#636262] w-auto md:w-300 mx-auto text-base md:text-2xl`}>
                        Discover the unique coffee blogs. From groundbreaking cafe to
                        industry level ones, we take pride in our blog collections.
                    </p>
                </div>

                {/* --- FILTER BUTTONS SECTION --- */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`${montserrat.className} w-37 h-9 px-8 py-1 rounded-sm text-sm md:text-base font-semibold transition-colors duration-200 ${activeFilter === category
                                ? "bg-brand-green text-white" // Active Style (Olive Green)
                                : "bg-[#EAEAEA] text-black cursor-pointer" // Inactive Style (Light Gray)
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {/* --- MAIN CONTENT LAYOUT (Grid) --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* LEFT COLUMN: Main Articles Grid (Takes up 3/4 width on large screens) */}
                    <div className="md:col-span-3">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className={`${montserrat.className} text-xl md:text-4xl font-semibold text-brand-brown whitespace-nowrap`}>
                                Coffee runs in our veins
                            </h2>
                            <div className="h-[0.5px] bg-brand-light-gray w-full mt-2"></div>
                        </div>

                        {/* The Article Cards Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                            {filteredArticles.length > 0 ? (
                                filteredArticles.map((article) => (
                                    <ArticleCard key={article.id} article={article} />
                                ))
                            ) : (
                                <div className={`${montserrat.className} col-span-full py-10 text-center text-brand-light-gray`}>
                                    No articles found for {activeFilter} district.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Takes up 1/4 width) */}
                    <aside className="lg:col-span-1 space-y-12">

                        {/* Featured Section */}
                        <SidebarSection title="Featured" items={SIDEBAR_POSTS} />

                        {/* Districts Section (Reusing the same mock data for visual consistency) */}
                        <SidebarSection title="Districts" items={SIDEBAR_POSTS} />

                    </aside>
                </div>
            </main>
        </div>
    );
}
// --- 3. Sub-Components for cleanliness ---

// The Main Large Card Component
function ArticleCard({ article }: { article: Article }) {
    return (
        <div className="group relative w-full aspect-4/5 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            {/* Background Image */}
            <img
                src={article.imageUrl}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className={`${montserrat.className} absolute bottom-0 left-0 p-4 md:p-6 text-white w-full`}>
                <div className="flex items-center text-xs tracking-wider mb-2 opacity-90 md:opacity-80">
                    <span>Category . {article.category}</span>
                    <span className="ml-1 md:ml-3 mr-1">|</span>
                    <span>{article.date}</span>
                </div>
                <h3 className="text-base md:text-2xl font-bold leading-tight mb-2">
                    {article.title}
                </h3>
            </div>
        </div>
    );
}
// Sidebar Section Component
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
                            <span className={`${montserrat.className} text-sm text-[#939393] mb-1`}>{item.date}</span>
                            <h4 className={`${montserrat.className}text-base font-semibold text-[#585858] leading-snug group-hover:text-[#8B5E3C] transition-colors`}>
                                {item.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

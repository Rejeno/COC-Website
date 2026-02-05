"use client";

import React, { useState } from "react";
import Head from "next/head";
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

                {/* Page Header Area */}
                <div className="text-center mb-12">
                    <h1 className={`${montserrat.className} text-6xl font-bold text-brand-brown pt-17 mb-8`}>
                        Discover our Latest Articles
                    </h1>
                    <p className={`${montserrat.className} text-[#636262] w-300 mx-auto text-2xl`}>
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
                            className={`${montserrat.className} w-37 h-9 px-8 py-1 rounded-sm font-semibold transition-colors duration-200 ${activeFilter === category
                                ? "bg-brand-green text-white" // Active Style (Olive Green)
                                : "bg-[#EAEAEA] text-black cursor-pointer" // Inactive Style (Light Gray)
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

            </main>
        </div>
    );
}


'use client'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import HeroCarousel from '../../../components/HeroCarousel'; // Adjust path if needed

export default function ArticlePage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const article = {
    title: 'Kyo Coffee and Its Brewing Local Pride',
    heroImages: [
      { src: '/Kyo/1.jpg', caption: 'Afternoon hues at Kyo Coffee featuring the signature Americano and matcha-infused ‘Bonsai’ blend.' },
      { src: '/Kyo/2.jpg', caption: 'A careful preparation of a hot brew, served fresh and steaming.' },
      { src: '/Kyo/3.jpg', caption: 'Bringing authentic Japanese style culture to the local coffee scene.' },
      { src: '/Kyo/4.jpg', caption: 'Reading through the ‘wall of love’ at Kyo Coffee.' },
      { src: '/Kyo/5.jpg', caption: 'Kyo Coffee’s signature Iced Americano and a sweet treat to match.' }
    ],
    inlineImage: '/Kyo/1.jpg',
    inlineImageCaption: 'Afternoon hues at Kyo Coffee featuring the signature Americano and matcha-infused ‘Bonsai’ blend.',
    inlineImage2: '/Kyo/2.jpg',
    inlineImage2Caption: 'A careful preparation of a hot brew, served fresh and steaming.',
    author: 'Kelley Marie Matoy',
    date: 'February 01, 2026',
    readTime: '5 mins read',
    location: ' KLMB Building, Guzman Street, Hibao-an Sur, Mandurriao, Iloilo City',
    facebookLink: 'https://www.facebook.com/share/18BYC713e3/',
    content: `In the far southern part of Mandurriao, Kyo Coffee brings a different rhythm from the city’s busy café scene, one that slows things down.What started as a pop-up during the Iloilo Specialty Coffee Fair in 2024, the café opened its physical store in the district and eventually created a brand of its own. Kyo Coffee focuses on three pillars: quality, sustainability, and traceability. It started as a passion project and grew into a specialty coffee space that offers quality flavors. For Kyo Coffee, being “specialty” is not just about high-grade beans, but also about responsible sourcing and mindful practices. 

Kyo Coffee is deeply rooted in Japanese-inspired concepts that embraces the philosophy of slow coffee and mindful brewing. The owner draws inspiration from Japanese culture, where each cup is prepared with attention and respect for the process. This approach shapes not only their brewing methods but also the calm, minimalist atmosphere of the café, designed for quiet conversations, focused work, or a peaceful break from the busy city.

Kyo Coffee also strongly supports local coffee farmers. The shop partners with local associations, including groups like the Pakiburak Association, to source beans responsibly. By advocating for farmers and prioritizing sustainability, Kyo ensures that quality coffee begins at the source. This connection to producers reflects a wider belief in community over competition within the local coffee industry.

Their menu highlights the natural flavors of its beans through pour-over coffees, and as well as their carefully brewed Americano that showcases distinct tasting notes. For those seeking something unique, their signature drink Bonsai blends coffee and matcha without milk, creating a bold yet balanced fusion.

Kyo Coffee welcomes students, professionals, and families alike, offering not just drinks, but a calm and thoughtful coffee experience meant to be savored. With the goal of meeting each customer’s balance of taste and comfort, Kyo Coffee continues to grow with genuine care and service leaving a lasting impression long after the last sip. 
`,
  };

  const paragraphs = article.content.split('\n\n').filter(Boolean);

  // Index at which to show the second inline image (left-floated, bottom section)
  const secondInlineIndex = paragraphs.length - 1;

  return (
    <article className="min-h-screen bg-white">
      {/* ── Lightbox Overlay ── */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={() => setLightboxSrc(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute -top-4 -right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={lightboxSrc}
              alt="Full size view"
              style={{ maxWidth: '60vw', maxHeight: '70vh', width: 'auto', height: 'auto' }}
              className="rounded-2xl shadow-2xl block"
            />
          </div>
        </div>
      )}
      {/* Back to news link */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] pt-6 lg:pt-10">
        <Link
          href="/news"
          className="inline-flex items-center gap-3 rounded-[13px] bg-brand-green px-6 py-3 text-sm font-bold text-white transition hover:bg-opacity-90"
        >
          <svg className="h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to news
        </Link>
      </div>

      {/* Hero Carousel Component */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-8 lg:mt-10">
        <div className="w-full">
           <HeroCarousel images={article.heroImages} title={article.title} />
        </div>
      </div>

      {/* Title + CTA */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-8 lg:mt-16">
        <div className="flex flex-row flex-wrap lg:flex-nowrap items-start justify-between gap-4 lg:gap-0">
          
          <div className="flex-1 max-w-[85%] lg:max-w-[880px]">
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] text-brand-brown">
              {article.title}
            </h1>
          </div>

          {/* Social Icon Section */}
          <div className="flex flex-col items-end lg:items-end gap-3 mt-1 lg:mt-4 shrink-0">
            <p className="hidden lg:block text-xl font-semibold text-brand-gray">
              Follow our Facebook Page
            </p>
            
            <a 
              href={article.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook" 
              className="flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-[13px] bg-brand-green text-white hover:bg-opacity-90 transition-colors"
            >
              <svg className="h-5 w-5 lg:h-[22px] lg:w-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Author Info */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-8 lg:mt-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
          
          {/* CHANGED: Removed italic, only underline the author's name */}
          <div>
            <p className="text-lg lg:text-xl font-medium text-brand-dark opacity-70">
              by <span className="underline">{article.author}</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-start lg:justify-end items-center gap-6 lg:gap-8 text-brand-dark text-sm lg:text-base mt-2 lg:mt-0">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 lg:h-5 lg:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" />
              </svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 lg:h-5 lg:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8" /> <path d="M12 6v6l4 2" />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-8 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          
          {/* Article Text Content */}
          <div className="max-w-none text-black flex flex-col h-full">
            <div className="flex-grow">
              {paragraphs.map((para, i) => (
                <div key={i}>
                  {i === 1 && (
                        <figure className="mb-6 lg:mb-4 lg:ml-8 lg:w-[45%] lg:float-right">
                          <button
                            onClick={() => setLightboxSrc(article.inlineImage)}
                            className="block w-full text-left group focus:outline-none cursor-zoom-in"
                            aria-label="View full image"
                          >
                            <div className="relative w-full h-[250px] lg:h-[350px] rounded-2xl overflow-hidden">
                              <Image 
                                src={article.inlineImage}
                                alt="Inline content image"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
                                </svg>
                              </div>
                            </div>
                          </button>
                          <figcaption className="mt-2 text-[15px] text-brand-gray opacity-70 italic text-center px-1">
                            {article.inlineImageCaption}
                          </figcaption>
                        </figure>
                      )}
    
                      {/* SECOND INLINE IMAGE */}
                      {i === secondInlineIndex && (
                        <figure className="mb-6 lg:mb-4 lg:mr-8 lg:w-[45%] lg:float-left">
                          <button
                            onClick={() => setLightboxSrc(article.inlineImage2)}
                            className="block w-full text-left group focus:outline-none cursor-zoom-in"
                            aria-label="View full image"
                          >
                            <div className="relative w-full h-[250px] lg:h-[350px] rounded-2xl overflow-hidden">
                              <Image 
                                src={article.inlineImage2}
                                alt="Second inline content image"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
                                </svg>
                              </div>
                            </div>
                          </button>
                          <figcaption className="mt-2 text-[15px] text-brand-gray opacity-70 italic text-center px-1">
                            {article.inlineImage2Caption}
                          </figcaption>
                        </figure>
                      )}
                  
                  <p className="mb-6 text-base lg:text-lg leading-relaxed text-justify tracking-wide">
                    {para.trim()}
                  </p>
                </div>
              ))}

              {/* Clear floats after all paragraphs */}
              <div className="clear-both" />
            </div>

            {/* Location Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
               <div className="flex items-start gap-3 text-brand-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0 text-brand-green mt-1">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-base leading-relaxed text-brand-gray">
                      {article.location}
                    </p>
                  </div>
               </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex gap-4">
               {/* Facebook */}
               <a href={article.facebookLink} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-80" aria-label="Follow on Facebook">
                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                 </svg>
               </a>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="relative">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="rounded-md bg-accent-brown py-3.5 text-center text-base font-semibold text-white uppercase">
                More Articles Here
              </div>

              <div className="space-y-8">
                {/* Article Recommendation 1 */}
                <Link href="/news/city-proper/LoCo/" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    LoCo Coffee and Its Brewing Local Pride
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                    LoCo Coffee, short for “Local Coffee,” serves as a modern bridge between ...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    Jan 30 | City Proper
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/20" />
                </Link>
                 {/* Article Recommendation 2 */}
                <Link href="/news/lapaz/Madge/" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Traditional Taste Crafted Through Decades of Passion
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                    Caught in a chaotic loop where people crave for a faster pace of life ...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    Jan 30 | La Paz
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/20" />
                </Link>
                 {/* Article Recommendation 3 */}
                <Link href="/news/villa/iloilo-coffee-house/" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Symphony of Flavors, Crafted in Iloilo Coffee House 
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                    Like a well-composed symphony, coffee is all about balance. Crafted  ...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    Jan 22 | Villa
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/20" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Footer spacer */}
      <div className="pb-20"></div>
    </article>
  );
}
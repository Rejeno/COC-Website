'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HeroCarousel from '../../../components/HeroCarousel'; // Adjust path if needed

export default function ArticlePage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const article = {
    title: 'Brewing stories at Iloilo Coffee Studio',
    heroImages: [
      { src: '/CStudio/1.jpg', caption: 'Precision in every pour.' },
      { src: '/CStudio/2.jpg', caption: 'The heartbeat of the studio.' },
      { src: '/CStudio/3.jpg', caption: 'Vintage lenses and timeless memories.' },
      { src: '/CStudio/4.jpg', caption: 'A quiet corner and a studio blend coffee.' },
      { src: '/CStudio/5.JPG', caption: 'The ultimate pairing of hazelnut and studio blend with garlic bread for a long afternoon.' }
    ],
    inlineImage: '/CStudio/4.jpg',
    inlineImageCaption: 'A quiet corner and a studio blend coffee.',
    inlineImage2: '/CStudio/3.jpg',
    inlineImage2Caption: 'Vintage lenses and timeless memories.',
    author: 'Leigh Diane Mandado',
    date: 'January 31, 2026',
    readTime: '5 mins read',
    location: 'RBG Building, 19 Jalandoni St, Iloilo City Proper, Iloilo City, 5000 Iloilo',
    facebookLink: 'https://www.facebook.com/share/1DjhDWuWma/',
    content: `Coffee has always been more than just a drink, it's a way of bringing people together. After working as a barista for other cafes, Russel Lujan opened his own cafe in March 2023, The Coffee Studio. Runs with his family, including his dad, Nereo Cajilig Lujan.

    The name itself hints at what awaits inside. Coffee Studio is not only a place to sip your favorite brew but it's a creative space where coffee, photography, music, and stories converge. Vintage cameras line the shelves, vinyl records spin their timeless tunes, and books add character to every corner. The café feels like a museum, a sanctuary, inviting guests to slow down and reconnect with the arts while enjoying a cup of locally sourced coffee.

    At the heart of Coffee Studio's identity is its commitment to supporting local growers. By highlighting the roasting process and sourcing beans from nearby farms, the café strengthens Iloilo's coffee culture while giving farmers a platform to share their craft. Located near schools and universities, the café quickly became a favorite hangout for students, professionals, and families. Free internet, charging stations, and a welcoming atmosphere make it a practical space, but what keeps people coming back is the feeling it offers. 

    The cafe lets you step into nostalgia, surrounded by reminders of art, photography, and music. While waiting for your cup of coffee, the aroma of freshly brewed coffee mingles with the warmth of vinyl records you can scan at the shelves. You can also appreciate the collection of cameras that once captured moments and the quiet stories held by it. Every detail invites you to pause, reflect, and appreciate the beauty of both coffee and culture.

    With its warm ambiance and the genuine smiles of its staff, Iloilo Coffee Studio is a perfect place for you to enjoy. Whether you're drawn by a love for the arts, culture, memory, or simply the comfort of a good cup of coffee, the space gently reminds you to slow down. Because, in a world that constantly rushes forward, Coffee Studio invites you to breathe, reflect, and appreciate the little things around you that often matter most.`,
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
                <Link href="/news/city-proper/palpitate" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Palpitate Coffee Where the Rush Slows Down
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                    As Iloilo's coffee culture continues to grow, Palpitate Coffee stands ...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    8 days ago | City Proper
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/20" />
                </Link>
                <Link href="/news/jaro/the-yield-specialty-coffee" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Brewing Passion at Yield Specialty Coffee
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                      Every great story begins with a spark. It can be a dream...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    10 days ago | Jaro
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/20" />
                </Link>
                <Link href="/news/lapuz/arias" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Cozy Escape at Arias Burger and Coffee
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                    The rich scent of freshly brewed locally-sourced beans is enough...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    14 days ago | Lapuz
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
import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '../../../components/HeroCarousel'; // Adjust path if needed

export default function ArticlePage() {
  const article = {
    title: 'Brewing Passion at Yield Specialty Coffee',
    heroImages: [
      { src: '/THE-YIELD/1.jpg', caption: 'A hot americano to start your day' },
      { src: '/THE-YIELD/2.jpg', caption: 'Warmth in a cup almost too pretty to drink' },
      { src: '/THE-YIELD/3.jpg', caption: 'A home away from home vibe that let\'s you pause a little' },
      { src: '/THE-YIELD/4.jpg', caption: 'Witnessing the care behind every cup' },
      { src: '/THE-YIELD/5.jpg', caption: ' Proudly local, the true taste of Iloilo\'s coffee culture' }
    ],
    inlineImage: '/THE-YIELD/5.jpg',
    inlineImageCaption: ' Proudly local, the true taste of Iloilo\'s coffee culture',
    inlineImage2: '/THE-YIELD/3.jpg',
    inlineImage2Caption: 'A home away from home vibe that let\'s you pause a little',
    author: 'Leigh Diane Mandado',
    date: 'February 1, 2026',
    readTime: '5 mins read',
    location: ' Lopez-Jaena St, Democracia St, Jaro, Iloilo City, 5000 Iloilo',
    facebookLink: 'https://www.facebook.com/theyieldspecialtycoffee?mibextid=rS40aB7S9Ucbxw6v',
    content: `Every great story begins with a spark. It can be a dream for others, but for some, it might be an opportunity that changes everything. In 2014, a door opened for Noi Dongor. He was offered the chance to distribute Allegro Beverages in Panay, one of the biggest coffee solutions providers in the Philippines. For him, it wasn’t just business but served to begin a journey in the coffee industry

 From there, Noi ventured into opening coffee shops across Iloilo, each one becoming a stepping stone toward something greater. His vision expanded into Kape Iloilo, a social enterprise that buys beans directly from local farmers. But it wasn’t only about trade. Farmers were trained, guided, and empowered to produce quality coffee that could stand proudly on its own.

 By 2017, Yield Specialty Coffee was born. Its beans were sourced mostly from Igbaras, carrying the richness of Iloilo’s soil. A cup of their black coffee is likely 100% Arabica, smooth and bold, while their milk-based drinks blend Arabica with Iloilo robusta, creating flavors that are both familiar and distinct. Yield quickly became a haven for its customers. Businesspeople found convenience in its easy parking and quiet corners for meetings. Young professionals and students discovered a welcoming space to study, work, or simply pause. Iloilo’s coffee culture has been growing fast, embracing espresso machines, pour-over, and cold brews. Yield stands at the heart of this movement, a place where tradition meets innovation.

 For Noi, coffee is more than a livelihood. It is a friend, a comfort zone, and a source of inspiration. It has given him connections, influence, and the honor of serving as president of the Philippine Coffee Board Inc., a role that carries weight across the nation. Coffee has taken him to places he never imagined, and through it all, he is rooted to his passion. At Yield Specialty Coffee, every cup tells this story of beginnings, community, and a man whose life has been brewed with purpose.

`,
  };

  const paragraphs = article.content.split('\n\n').filter(Boolean);

  // Index at which to show the second inline image (left-floated, bottom section)
  const secondInlineIndex = paragraphs.length - 1;

  return (
    <article className="min-h-screen bg-white">
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
                  {/* FIRST INLINE IMAGE — floats right, after paragraph index 1 */}
                  {i === 1 && (
                    <figure className="mb-6 lg:mb-4 lg:ml-8 lg:w-[45%] lg:float-right">
                      <div className="relative w-full h-[250px] lg:h-[350px] rounded-2xl overflow-hidden">
                        <Image 
                          src={article.inlineImage}
                          alt="Inline content image"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-2 text-[15px] text-brand-gray opacity-70 italic text-center px-1">
                        {article.inlineImageCaption}
                      </figcaption>
                    </figure>
                  )}

                  {/* SECOND INLINE IMAGE — floats left, before last paragraph */}
                  {i === secondInlineIndex && (
                    <figure className="mb-6 lg:mb-4 lg:mr-8 lg:w-[45%] lg:float-left">
                      <div className="relative w-full h-[250px] lg:h-[350px] rounded-2xl overflow-hidden">
                        <Image 
                          src={article.inlineImage2}
                          alt="Second inline content image"
                          fill
                          className="object-cover"
                        />
                      </div>
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
                <Link href="/news/jaro/cafe-nahum" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Finding Comfort at Cafe Nahum
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                     Cafe Nahum takes pride in highlighting locally sourced coffee beans through...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    11 days ago | Jaro
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/20" />
                </Link>
                <Link href="/news/city-proper/coffee-studio" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    A Timeless Taste of Ilonggo Comfort
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                    True to its mission of preserving Ilonggo food heritage, Café Augusto highlights...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    9 days ago | Molo
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/20" />
                </Link>
                <Link href="/news/lapuz/vandv" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Home Brewed with Love at V&V Coffee
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                     In every cup of coffee, there is a story. For some, it’s about comfort, and...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    13 days ago | Jaro
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
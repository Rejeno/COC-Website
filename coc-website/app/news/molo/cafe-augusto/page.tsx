import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '../../../components/HeroCarousel'; // Adjust path if needed

export default function ArticlePage() {
  const article = {
    title: 'A Timeless Taste of Ilonggo Comfort',
    heroImages: [
      { src: '/CAugusto/1.jpg', caption: 'Warm tone and good vibes at Café Augusto' },
      { src: '/CAugusto/2.jpg', caption: 'Savory, fresh, and cold brewed perfect for an afternoon chill' },
      { src: '/CAugusto/3.jpg', caption: 'Café Augusto’s signature Brewed House Blend on ice!' },
      { src: '/CAugusto/4.jpg', caption: 'Crisp galletas paired with a hot fresh brew' },
      { src: '/CAugusto/5.jpg', caption: ' Retro calls and coffee sketches in the house' }
    ],
    inlineImage: '/CAugusto/1.jpg',
    inlineImageCaption: 'Warm tone and good vibes at Café Augusto',
    inlineImage2: '/CAugusto/2.jpg',
    inlineImage2Caption: 'Savory, fresh, and cold brewed perfect for an afternoon chill',
    author: 'Kelley Marie Matoy ',
    date: 'February 1, 2026',
    readTime: '5 mins read',
    location: 'Avanceña St, Molo, beside Panaderia de Molo & Phoenix Gas Station, Iloilo City',
    facebookLink: 'https://www.facebook.com/share/1Gi5n8ErvP/',
    content: `Stepping into Café Augusto feels like walking into a familiar place. The space carries a simple, homey vibe inspired by classic Filipino-Spanish furnishings, focused on comfort and a welcoming environment for guests. It is a place rooted in family, tradition, and Ilonggo comfort food.

Café Augusto began as a small café along the Esplanade 2 with the goal of serving all-day breakfast and traditional pancit molo. The café was opened by a couple who both come from families involved in the baking business. Its name is a tribute to the owner’s late grandfather, Augusto B. Villaluna, who supported their family’s catering and baking ventures. Upholding this legacy, the café continues to serve Ilonggo comfort food and merienda favorites to keep the culture and tradition alive.

True to its mission of preserving Ilonggo food heritage, Café Augusto highlights family heirloom recipes and local delicacies. Their pancit molo, a local dish, reflects this commitment to tradition. When paired with their signature House Blend Brewed Coffee, it makes for a satisfying and balanced meal. The house blend, carefully curated by the café, offers a light and smooth flavor that is not too strong—ideal for beginners or those who prefer a gentler cup. Its subtle notes complement savory dishes like pancit molo without overpowering them, creating a comforting dining experience.

Café Augusto uses a blend of local Robusta and imported Arabica beans, supporting local suppliers while maintaining quality. This balance mirrors their overall approach of honoring tradition while adapting to modern tastes. For them, venturing into the local business scene came with challenges, but adapting to trends and customer preferences has shaped the café into what it is today.

Frequented by tourists and families who crave nostalgic flavors, Café Augusto continues to serve warm Ilonggo comfort food with heart. As Iloilo grows as a City of Gastronomy, the café aims to become a notable destination for local coffee, Ilonggo delicacies, and traditional heritage dishes—where every meal and cup is served with intention and the desire to bring back memories.

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
                <Link href="/news/molo/bruskoffee" className="group block cursor-pointer">
                  <h3 className="font-semibold text-lg leading-tight text-black group-hover:text-brand-green line-clamp-2 transition-colors">
                    Coffee and Comfort in Your Neighborhood Brew
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray line-clamp-2">
                    Starting  from a small setup in a home garage, Bruskof...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    9 days ago | Molo
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
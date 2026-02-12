import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '../../../components/HeroCarousel'; // Adjust path if needed

export default function ArticlePage() {
  const article = {
    title: 'Brewing stories at Iloilo Coffee Studio',
    heroImages: [
      '/CStudio/1.jpg',
      '/CStudio/2.jpg',
      '/CStudio/3.jpg',
      '/CStudio/4.jpg',
      '/CStudio/5.jpg'
    ],
    inlineImage: '/CStudio/4.jpg',
    author: 'Leigh Diane Mandado',
    role: 'Article Author',
    avatar: '/Authors/leigh.jpg',
    date: 'December 25, 2026',
    readTime: '3 mins read',
    location: 'RBG Building, 19 Jalandoni St, Iloilo City Proper, Iloilo City, 5000 Iloilo',
    facebookLink: 'https://www.facebook.com/share/1DjhDWuWma/',
    content: `Coffee has always been more than just a drink, it’s a way of bringing people together. After working as a barista for other cafes, Russel Lujan opened his own cafe in March 2023, The Coffee Studio. Runs with his family, including his dad, Nereo Cajilig Lujan.

    The name itself hints at what awaits inside. Coffee Studio is not only a place to sip your favorite brew but it’s a creative space where coffee, photography, music, and stories converge. Vintage cameras line the shelves, vinyl records spin their timeless tunes, and books add character to every corner. The café feels like a museum, a sanctuary, inviting guests to slow down and reconnect with the arts while enjoying a cup of locally sourced coffee.

    At the heart of Coffee Studio’s identity is its commitment to supporting local growers. By highlighting the roasting process and sourcing beans from nearby farms, the café strengthens Iloilo’s coffee culture while giving farmers a platform to share their craft. Located near schools and universities, the café quickly became a favorite hangout for students, professionals, and families. Free internet, charging stations, and a welcoming atmosphere make it a practical space, but what keeps people coming back is the feeling it offers. 

    The cafe lets you step into nostalgia, surrounded by reminders of art, photography, and music. While waiting for your cup of coffee, the aroma of freshly brewed coffee mingles with the warmth of vinyl records you can scan at the shelves. You can also appreciate the collection of cameras that once captured moments and the quiet stories held by it. Every detail invites you to pause, reflect, and appreciate the beauty of both coffee and culture.

    With its warm ambiance and the genuine smiles of its staff, Iloilo Coffee Studio is a perfect place for you to enjoy. Whether you’re drawn by a love for the arts, culture, memory, or simply the comfort of a good cup of coffee, the space gently reminds you to slow down. Because, in a world that constantly rushes forward, Coffee Studio invites you to breathe, reflect, and appreciate the little things around you that often matter most.`,
  };

  const paragraphs = article.content.split('\n\n').filter(Boolean);

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
        <HeroCarousel images={article.heroImages} title={article.title} />
      </div>

      {/* Title + CTA */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-12 lg:mt-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0">
          <div className="max-w-[920px] lg:max-w-[780px] xl:max-w-[880px]">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] text-brand-brown">
              {article.title}
            </h1>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 mt-4 lg:mt-4">
            <p className="text-lg lg:text-xl font-semibold text-brand-gray">
              Follow our Facebook Page
            </p>
            <a 
              href={article.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook" 
              className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-brand-green text-white hover:bg-opacity-90 transition-colors"
            >
              <svg className="h-[22px] w-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Author Info */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-10 lg:mt-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          <div className="flex items-start gap-5">
            <div className="h-[60px] w-[60px] lg:h-[76px] lg:w-[76px] rounded-full overflow-hidden flex-shrink-0">
              <Image src={article.avatar} alt={article.author} width={76} height={76} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg lg:text-xl text-brand-light-gray">{article.author}</p>
              <p className="text-xl lg:text-2xl font-semibold text-brand-dark">{article.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-start lg:justify-end items-end gap-x-8 gap-y-3 text-brand-dark text-sm lg:text-base">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" />
              </svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8" /> <path d="M12 6v6l4 2" />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-8 lg:mt-10">
        <div className="max-w-full lg:max-w-[820px] xl:max-w-[980px] border-b border-black" />
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          
          {/* Article Text Content */}
          <div className="max-w-none text-black flex flex-col h-full">
            <div className="flex-grow">
              {paragraphs.map((para, i) => (
                <div key={i}>
                  {/* INLINE IMAGE LOGIC */}
                  {i === 1 && (
                    <div className="relative w-full h-[300px] mb-6 lg:mb-4 lg:ml-8 lg:w-[45%] lg:h-[350px] lg:float-right rounded-2xl overflow-hidden">
                      <Image 
                        src={article.inlineImage}
                        alt="Inline content image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <p className="mb-7 text-base lg:text-lg leading-relaxed text-justify tracking-wide">
                    {para.trim()}
                  </p>
                </div>
              ))}
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
               {/* Instagram */}
               <a href="#" className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-80" aria-label="Follow on Instagram">
                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                 </svg>
               </a>
               {/* X (Twitter) */}
               <a href="#" className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-80" aria-label="Follow on X">
                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                 </svg>
               </a>
               {/* Threads */}
               <a href="#" className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-80" aria-label="Follow on Threads">
                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
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
                   As Iloilo’s coffee culture continues to grow, Palpitate Coffee stands ...
                  </p>
                  <p className="mt-3 text-xs text-brand-light-gray font-medium">
                    2 hrs ago | City Proper
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
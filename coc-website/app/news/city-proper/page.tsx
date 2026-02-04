// app/news/city-proper/page.tsx
// Duplicate this file and rename the folder for other districts (e.g. jaro, lapaz, mandurriao, etc.)

import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePage() {
  // Article content – update these values for each district
  const article = {
    title: 'This should contain the title of the article. It could be two lines or so..',
    heroImage: '/hero-images/image.png',
    author: 'Mark Andrei Encanto',
    role: 'Article Author',
    avatar: '/avatar-images/mark.jpg',
    date: 'December 25, 2026',
    readTime: '3 mins read',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  };

  const paragraphs = article.content.split('\n\n').filter(Boolean);

  return (
    <article className="min-h-screen bg-white">
      {/* Back to news link – top-left navigation */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] pt-6 lg:pt-10">
        <Link
          href="/news"
          className="inline-flex items-center gap-3 rounded-[13px] bg-brand-green px-6 py-3 text-sm font-bold text-white transition hover:bg-opacity-90"
        >
          <svg
            className="h-[18px] w-[18px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to news
        </Link>
      </div>

      {/* Hero / featured image – large banner at the top */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-8 lg:mt-10">
        <div className="overflow-hidden rounded-[38px]">
          <Image
            src={article.heroImage}
            alt={article.title}
            width={1339}
            height={497}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Article title + Follow CTA – main headline and social action */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-12 lg:mt-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0">
          {/* Title – main heading, constrained to prevent overflow */}
          <div className="max-w-[920px] lg:max-w-[780px] xl:max-w-[880px]">
            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight lg:leading-[78px] text-brand-brown">
              {article.title}
            </h1>
          </div>

          {/* Follow CTA – right-aligned social prompt + icon */}
          <div className="flex flex-col items-end gap-3 lg:items-end">
            <p className="text-xl font-semibold text-brand-gray">
              Follow our Facebook Page
            </p>
            <div className="flex justify-center w-full">
              <button
                aria-label="Follow us on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-brand-green text-white hover:bg-opacity-90 transition-colors"
              >
                <svg
                  className="h-[22px] w-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Author info + date / read time */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-10 lg:mt-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Author details – avatar, name and role */}
          <div className="flex items-start gap-5">
            <div className="h-[76px] w-[76px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={article.avatar}
                alt={article.author}
                width={76}
                height={76}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-xl text-brand-light-gray">{article.author}</p>
              <p className="text-2xl font-semibold text-brand-dark">{article.role}</p>
            </div>
          </div>

          {/* Date and read time – right-aligned */}
          <div className="flex flex-wrap justify-end lg:justify-end items-end gap-x-8 gap-y-3 text-brand-dark text-base lg:self-end">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="13" r="8" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator line – underlines the author section */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-8 lg:mt-10">
        <div className="max-w-[860px] lg:max-w-[820px] xl:max-w-[750px] border-b border-black" />
      </div>

      {/* Main article content + sidebar */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,920px)_minmax(0,340px)] xl:grid-cols-[minmax(0,980px)_minmax(0,320px)] gap-12 lg:gap-16 xl:gap-20">
          {/* Article body – main text content */}
          <div className="max-w-none">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="mb-7 text-base leading-[20px] text-justify tracking-[0.01em] text-black last:mb-0"
              >
                {para.trim()}
              </p>
            ))}
          </div>

          {/* Sidebar – related / suggested articles */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-md bg-accent-brown py-3.5 text-center text-base font-semibold text-white">
              MORE ARTICLES HERE
            </div>

            <div className="mt-8 space-y-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="group">
                  <h3 className="font-semibold text-base leading-[20px] tracking-[0.01em] text-black group-hover:text-brand-green line-clamp-2">
                    News article here can be like anything like this..
                  </h3>
                  <p className="mt-2 text-base leading-[20px] tracking-[0.01em] text-brand-gray line-clamp-2">
                    First few descriptions here para lang makita omg...
                  </p>
                  <p className="mt-3 text-xs leading-[15px] tracking-[0.01em] text-brand-light-gray">
                    18 hrs ago | Local News
                  </p>
                  <hr className="mt-5 border-t border-brand-dark/30" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Footer – social media links with inline SVG */}
      <footer className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-24 pb-12 lg:pb-20">
        <div className="flex gap-5">
          <a
            href="#"
            className="flex h-[39px] w-[39px] items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-90"
            aria-label="Follow on Facebook"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            href="#"
            className="flex h-[39px] w-[39px] items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-90"
            aria-label="Follow on Instagram"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="#"
            className="flex h-[39px] w-[39px] items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-90"
            aria-label="Follow on X"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="#"
            className="flex h-[39px] w-[39px] items-center justify-center rounded-[6px] bg-brand-brown text-white transition hover:bg-opacity-90"
            aria-label="Follow on Threads"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
            </svg>
          </a>
        </div>
      </footer>
    </article>
  );
}
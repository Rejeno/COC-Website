// app/news/[slug]/page.tsx
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    slug: 'cityproper',
    title: 'Top Gems in Jaro District Life in a way',
    heroImage: '/images/articles/jaro-hero.jpg', // put your real image in public/
    author: 'Mark Andrei Encanto',
    role: 'Article Author',
    avatar: '/images/avatars/mark-andrei.jpg',
    date: 'December 25, 2025',
    readTime: '3 mins read',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien, vitae pellentesque sem placerat. In id cursus mi, pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.

Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Quisque faucibus ex sapien, vitae pellentesque sem placerat. In id cursus mi, pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  // Add more articles here later if you want
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  // 404 fallback if wrong slug (optional but nice)
  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-brand-brown">Article not found</h1>
        <Link href="/news" className="mt-6 text-brand-green underline">
          ← Back to all articles
        </Link>
      </div>
    );
  }

  const paragraphs = article.content.split('\n\n');

  return (
    <article className="min-h-screen bg-white">
      {/* Back Button – matches Figma exactly */}
      <div className="mx-auto max-w-7xl px-6 lg:px-[58px] pt-10">
        <Link
          href="/news"
          className="inline-flex items-center gap-3 rounded-[13px] bg-brand-green px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#5a6b4e]"
        >
          <ArrowLeft size={18} />
          Back to news
        </Link>
      </div>

      {/* Hero Image */}
      <div className="mx-auto max-w-7xl px-6 lg:px-[58px] mt-10">
        <div className="overflow-hidden rounded-[38px]">
          <Image
            src={article.heroImage}
            alt={article.title}
            width={1339}
            height={497}
            className="aspect-video w-full object-cover md:aspect-auto"
            priority
          />
        </div>
      </div>

      {/* Title */}
      <div className="mx-auto max-w-7xl px-6 lg:px-[58px] mt-16">
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.1] text-brand-brown md:text-6xl lg:text-[64px] lg:leading-[78px]">
          {article.title}
        </h1>
      </div>

      {/* Author + Meta + Follow CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-[58px] mt-12 grid gap-10 lg:grid-cols-3">
        {/* Author */}
        <div className="flex items-center gap-5 lg:col-span-2">
          <div className="h-[76px] w-[76px] overflow-hidden rounded-full">
            <Image
              src={article.avatar}
              alt={article.author}
              width={76}
              height={76}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl text-[#5E5E5E]">{article.author}</p>
            <p className="text-2xl font-semibold text-[#323232]">{article.role}</p>
          </div>
        </div>

        {/* Date & Read Time */}
        <div className="flex flex-wrap items-center gap-6 text-[#323232]">
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Body + Sidebar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-[58px] mt-16 grid gap-12 lg:grid-cols-3 lg:gap-20">
        {/* Main Content */}
        <div className="prose prose-lg max-w-none lg:col-span-2">
          {paragraphs.map((para, i) => (
            <p key={i} className="mb-7 text-justify text-base leading-7 tracking-wide text-black">
              {para.trim()}
            </p>
          ))}
        </div>

        {/* Sidebar – More Articles */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-md bg-[#9F6B39] py-3 text-center text-base font-semibold text-white">
            MORE ARTICLES HERE
          </div>

          <div className="mt-8 space-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <h3 className="line-clamp-2 font-semibold leading-6 text-black hover:text-brand-green">
                  News article here can be like anything like this..
                </h3>
                <p className="mt-2 line-clamp-2 text-base text-[#4B4B4B]">
                  First few descriptions here para lang makita omg...
                </p>
                <p className="mt-3 text-xs text-[#666666]">18 hrs ago | Local News</p>
                <hr className="mt-5 border-[#505050]/50" />
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer Social Icons */}
      <footer className="mx-auto max-w-7xl px-6 lg:px-[58px] mt-24 pb-20">
        <div className="flex justify-start gap-5">
          {['Facebook', 'Instagram', 'X', 'Threads'].map((social) => (
            <a
              key={social}
              href="#"
              className="flex h-[39px] w-[39px] items-center justify-center rounded-md bg-[#5A483C] text-white transition hover:bg-[#4a3c32]"
              aria-label={social}
            >
              {social[0]}
            </a>
          ))}
        </div>
      </footer>
    </article>
  );
}
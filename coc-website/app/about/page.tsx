// app/about/page.tsx
// About page – introduces the project, mission, stats, and team

import Image from 'next/image';
import { montserrat } from '../../lib/font';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero heading + right-side image */}
      <section className="mx-auto max-w-360 px-6 lg:px-15 mt-10 md:mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h1 className={`${montserrat.className} text-4xl sm:text-6xl lg:text-[64px] font-medium leading-tight lg:leading-20 text-brand-brown`}>
              Grounded in Coffee, Driven by Thought.
            </h1>
            <p className={`${montserrat.className} text-[#383838] mb-6 mt-5 md:mt-10 text-base md:text-lg text-justify`}>
              Caffeinated Spaces is a website created by journalism students to explore and celebrate the evolving coffee culture in Iloilo City. From cozy cafés to bustling coffee spots, the site features local coffee shops, highlighting their unique stories, locally produced beans, brewing techniques, atmosphere, service, and connection to the community. More than just a guide, Caffeinated Spaces aims to promote Iloilo’s coffee scene and inspire readers to support local cafés and coffee farmers. By sharing these stories, the website hopes to inform, engage, and encourage a deeper appreciation for the people and craft behind every cup of coffee in the city.
            </p>
          </div>

          <div className="relative h-56 lg:h-124 rounded-[38px] overflow-hidden order-first md:order-last">
            <Image
              src="/avatar-images/mark.jpg"
              alt="About Caffeinated Spaces"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="mx-auto max-w-360 px-6 lg:px-15 mt-8 lg:mt-32">
        <div className={`${montserrat.className} flex flex-wrap justify-center lg:justify-between gap-12 lg:gap-0`}>
          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-accent-brown">
              65
            </p>
            <p className="mt-3 text-base md:text-xl font-medium text-brand-dark">
              Visited Cafes
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-accent-brown">
              15
            </p>
            <p className="mt-3 text-base md:text-xl font-medium text-brand-dark">
              Coffee Blogs
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-brand-green">
              4
            </p>
            <p className="mt-3 text-base  md:text-xl font-medium text-brand-dark">
              Blog Contributors
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-brand-green">
              7
            </p>
            <p className="mt-3 text-base md:text-xl font-medium text-brand-dark">
              Districts Featured
            </p>
          </div>
        </div>

        <p className={`${montserrat.className} text-xl lg:text-2xl font-medium leading-[146%] text-[#383838] text-center mt-16 lg:mt-24`}>
          Our mission is to serve thoughtfully crafted coffee blogs while providing a welcoming space for meaningful conversation, reflection, and exchange of ideas. We envision a café that goes beyond routine — one that encourages curiosity, informed discussion, and genuine human connection, where every cup supports focus, dialogue, and a shared appreciation for quality and insight.
        </p>
      </section>

      {/* Meet the team section */}
      <section className={`${montserrat.className} mx-auto max-w-360 px-6 lg:px-15 mt-24 lg:mt-32`}>
        <h2 className="text-4xl sm:text-6xl lg:text-[64px] font-medium leading-tight lg:leading-20 text-brand-brown">
          Meet the team
        </h2>

        <p className="mt-6 max-w-315 text-base lg:text-xl leading-relaxed text-[#747474]">
          Meet the team that took time to curate all of the information for centralized information directory and blogs.
        </p>

        {/* Team cards grid */}
        <div className="grid mb-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-16">
          {/* Card 1 */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative h-70 lg:h-100 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/avatar-images/mark.jpg"
                alt="Mark Andrei Encanto"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Mark Andrei Encanto
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Bachelor of Science in Computer Science
              </p>

              <div className="mt-6 flex gap-4">
                <a href="#" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" aria-label="X" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative h-80 lg:h-100 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/avatar-images/mark.jpg"
                alt="Team Member Name"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Team Member Name
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Degree / Role
              </p>

              <div className="mt-6 flex gap-4">
                <a href="#" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" aria-label="X" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative h-80 lg:h-100 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/avatar-images/mark.jpg"
                alt="Another Team Member"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Another Team Member
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Degree / Role
              </p>

              <div className="mt-6 flex gap-4">
                <a href="#" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" aria-label="X" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
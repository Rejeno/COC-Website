// app/about/page.tsx
// About page – introduces the project, mission, stats, and team

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero heading + right-side image */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-medium leading-tight lg:leading-[78px] text-brand-brown">
              Grounded in Coffee, Driven by Thought.
            </h1>
            <p className="mb-6 mt-12 text-justify">
              Caffeinated Spaces is a website created by journalism students to explore and celebrate the evolving coffee culture in Iloilo City. From cozy cafés to bustling coffee spots, the site features local coffee shops, highlighting their unique stories, locally produced beans, brewing techniques, atmosphere, service, and connection to the community. More than just a guide, Caffeinated Spaces aims to promote Iloilo’s coffee scene and inspire readers to support local cafés and coffee farmers. By sharing these stories, the website hopes to inform, engage, and encourage a deeper appreciation for the people and craft behind every cup of coffee in the city.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[497px] rounded-[38px] overflow-hidden">
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
      <section className="mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-20 lg:mt-32">
        <div className="flex flex-wrap justify-center lg:justify-between gap-12 lg:gap-0">
          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-accent-brown">
              65
            </p>
            <p className="mt-3 text-xl font-medium text-brand-dark">
              Visited Cafes
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-accent-brown">
              15
            </p>
            <p className="mt-3 text-xl font-medium text-brand-dark">
              Coffee Blogs
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-brand-green">
              4
            </p>
            <p className="mt-3 text-xl font-medium text-brand-dark">
              Blog Contributors
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-brand-green">
              7
            </p>
            <p className="mt-3 text-xl font-medium text-brand-dark">
              Districts Featured
            </p>
          </div>
        </div>

        <p className="text-xl lg:text-2xl font-medium leading-[146%] text-[#383838] text-center mt-16 lg:mt-24">
          Our mission is to serve thoughtfully crafted coffee blogs while providing a welcoming space for meaningful conversation, reflection, and exchange of ideas. We envision a café that goes beyond routine — one that encourages curiosity, informed discussion, and genuine human connection, where every cup supports focus, dialogue, and a shared appreciation for quality and insight.
        </p>
      </section>

      {/* Meet the team section */}
      <section className="mb-40 mx-auto max-w-[1440px] px-6 lg:px-[58px] mt-24 lg:mt-32">
        <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-medium leading-tight lg:leading-[78px] text-brand-brown">
          Meet the team
        </h2>

        <p className="mt-6 max-w-[1258px] text-base lg:text-xl leading-relaxed text-[#747474]">
          Meet the team that took time to curate all of the information for centralized information directory and blogs.
        </p>

        {/* Team cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-16">
          {/* Card 1 */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative h-[320px] lg:h-[400px] transition-transform duration-500 group-hover:scale-105">
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
                  <Facebook size={28} />
                </a>
                <a href="#" aria-label="Instagram" className="text-brand-dark hover:text-brand-green transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="#" aria-label="X" className="text-brand-dark hover:text-brand-green transition-colors">
                  <Twitter size={28} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-brand-dark hover:text-brand-green transition-colors">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 – repeat same hover classes */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative h-[320px] lg:h-[400px] transition-transform duration-500 group-hover:scale-105">
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
                <Facebook size={28} className="text-brand-dark" />
                <Instagram size={28} className="text-brand-dark" />
                <Twitter size={28} className="text-brand-dark" />
                <Linkedin size={28} className="text-brand-dark" />
              </div>
            </div>
          </div>

          {/* Card 3 – same hover classes */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative h-[320px] lg:h-[400px] transition-transform duration-500 group-hover:scale-105">
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
                <Facebook size={28} className="text-brand-dark" />
                <Instagram size={28} className="text-brand-dark" />
                <Twitter size={28} className="text-brand-dark" />
                <Linkedin size={28} className="text-brand-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
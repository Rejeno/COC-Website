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
              Savor the Story Behind Every Cup
            </h1>
            <p className={`${montserrat.className} text-[#383838] mb-6 mt-5 md:mt-10 text-base md:text-lg text-justify`}>
              Caffeinated Spaces is a website created by journalism students from West Visayas State University to explore and celebrate the evolving coffee culture in Iloilo City. From cozy cafés to bustling coffee spots, the site features local coffee shops, highlighting their unique stories, locally sourced beans, brewing techniques, ambience, service, and connection to the community.
            </p>
            <p className={`${montserrat.className} text-[#383838] mb-6 mt-5 md:mt-10 text-base md:text-lg text-justify`}>
              More than just a guide, Caffeinated Spaces aims to promote Iloilo’s coffee scene and inspire readers to support local cafés and coffee farmers. By sharing these stories, the website hopes to inform, engage, and encourage a deeper appreciation for the people and craft behind every cup of coffee in the city.

            </p>
          </div>

          <div className="relative h-56 lg:h-124 lg:mt-8 rounded-[38px] overflow-hidden order-first md:order-last">
            <Image
              src="/cover-image.jpg"
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
              13
            </p>
            <p className="mt-3 text-base md:text-xl font-medium text-brand-dark">
              Visited Cafes
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-accent-brown">
              13
            </p>
            <p className="mt-3 text-base md:text-xl font-medium text-brand-dark">
              Coffee Blogs
            </p>
          </div>

          <div className="text-center">
            <p className="text-5xl sm:text-6xl lg:text-[64px] font-semibold leading-tight text-brand-green">
              3
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
          Our mission aims to document and promote the vibrant coffee culture of Iloilo City by sharing meaningful stories of local cafes and their craft behind every cup. We also seek to inform readers, highlight locally sourced products and brewing traditions, and encourage community support for locally grown coffee businesses. <br></br> <br></br>By showcasing the passion, creativity, and connection within Iloilo’s coffee scene, Caffeinated Spaces aspires to deepen appreciation for local coffee culture while strengthening the bond between cafes and the communities they serve.

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
            <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-96 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Authors/trixie.jpg"
                alt="Trixie"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                // Custom position: 0% X-axis (left/center), 25% Y-axis (slightly down from top)
                // This skips the empty white space at the very top but keeps the head in view.
                style={{ objectPosition: 'center 50%' }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Trixie Aurelia T. Ningas
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Editor & Multimedia Lead
              </p>

              <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/share/1GDCmT5FCi/" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
            <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-96 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Authors/leigh.jpg"
                alt="Trixie"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                // Custom position: 0% X-axis (left/center), 25% Y-axis (slightly down from top)
                // This skips the empty white space at the very top but keeps the head in view.
                style={{ objectPosition: 'center 30%' }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Leigh Diane M. Mandado
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Lead Photographer & Visual Storyteller
              </p>

              <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/share/1BDZLR1Mey/" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
            <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-96 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Authors/kelley.jpg"
                alt="Trixie"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                // Custom position: 0% X-axis (left/center), 25% Y-axis (slightly down from top)
                // This skips the empty white space at the very top but keeps the head in view.
                style={{ objectPosition: 'center 50%' }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Kelley Marie G. Matoy
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Project Coordinator & Content Writer
              </p>

              <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/share/1AAirUj4TC/" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mb-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 lg:mt-10">
          {/* Card 1 */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-96 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Developers/Regino.JPG"
                alt="Regino"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                // Custom position: 0% X-axis (left/center), 25% Y-axis (slightly down from top)
                // This skips the empty white space at the very top but keeps the head in view.
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Regino Balogo Jr.
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Lead Developer
              </p>

              <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/regino.balogo.jr" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
            <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-96 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Developers/Encanto.jpg"
                alt="Mark"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                // Custom position: 0% X-axis (left/center), 25% Y-axis (slightly down from top)
                // This skips the empty white space at the very top but keeps the head in view.
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Mark Andrei Encanto
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Lead UI/UX Designer and Developer
              </p>

              <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/markndrei/" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
            <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-96 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Developers/Gumacal.JPG"
                alt="Trixie"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                // Custom position: 0% X-axis (left/center), 25% Y-axis (slightly down from top)
                // This skips the empty white space at the very top but keeps the head in view.
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Rhazel Jay Gumacal
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Developer and Assets Director
              </p>

              <div className="mt-6 flex gap-4">
                <a href="https://www.facebook.com/wracell1001" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
       <div className="flex justify-center mb-40 mt-10">
        <div className="w-full max-w-sm">
          {/* Card 1 */}
          <div className="
            overflow-hidden rounded-[36px] bg-white shadow-lg
            transition-all duration-300 ease-out
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl
            group
          ">
            <div className="relative w-full aspect-3/4 lg:aspect-auto lg:h-96 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Consultant/Rica.jpg"
                alt="Regino"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-[28px] font-bold text-brand-dark">
                Prof. Rica Marcet O. Funtecha
              </h3>
              <p className="mt-1 text-base text-brand-light-gray">
                Consultant
              </p>

              <div className="mt-6 flex gap-4">
                <a href=" https://www.facebook.com/share/1AkSAzDLkF/" aria-label="Facebook" className="text-brand-dark hover:text-brand-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
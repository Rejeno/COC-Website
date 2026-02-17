// Hero section – main landing visual with heading, button, image grid, intro, and districts sidebar

import Image from "next/image";
import Link from "next/link";
import { montserrat } from '../lib/font';

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center bg-white">

      {/* --- PART 1: GRAY BACKGROUND SECTION --- */}
      <div className="relative h-112 md:h-204 w-full md:w-360 bg-white pt-20 md:pt-30 px-4 flex flex-col items-center text-center gap-10 rounded-b-[40px] overflow-hidden">

        {/* DECORATIVE ELLIPSES */}
        <div className="absolute bottom-0 left-0 z-0 pointer-events-none">
          <Image
            src="/hero-images/ellipse3.svg"
            alt="Gradient Blur Left"
            width={1000}
            height={1000}
            className="object-contain opacity-60 md:opacity-100"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
          <Image
            src="/hero-images/ellipse2.svg"
            alt="Gradient Blur Right"
            width={1000}
            height={1000}
            className="object-contain opacity-60 md:opacity-100"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 space-y-6 max-w-5xl">
          <h1 className={`${montserrat.className} text-4xl sm:text-5xl md:text-8xl text-brand-brown font-normal leading-tight`}>
            <span className="block md:whitespace-nowrap">Strong Coffee.</span>
            <span className="block md:whitespace-nowrap">Strong Opinions.</span>
          </h1>

          <Link href="/news">
            {/* UPDATED BUTTON: Added hover:scale-105, active:scale-95, shadow effects */}
            <button className={`${montserrat.className} bg-brand-green cursor-pointer text-white px-5 pt-2 pb-3 md:px-7 md:pt-4 md:pb-5 rounded-[15px] text-md md:text-2xl font-medium transition-all duration-300 hover:bg-opacity-90 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl`}>
              Read an article
            </button>
          </Link>
        </div>
      </div>

      {/* --- PART 2: THE CARD --- */}
       <div className="relative z-20 -mt-35 md:-mt-80 w-[90%] md:w-300">
        
        {/* Outer Grayish Transparent Border Wrapper */}
        <div className="bg-[#DFDADA69] w-full p-3 md:p-8 rounded-[25px] backdrop-blur-md">

          {/* Inner White Card */}
          <div className="w-full bg-white backdrop-blur-md p-4 md:p-20 rounded-[25px]">

            {/* Grid Layout */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 h-80 md:h-150">

              {/* Left Column Images */}
              <div className="flex flex-col gap-2 md:gap-4 h-full">
                {/* Large Top */}
                <div className="relative w-full flex-3 min-h-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/cover-image.jpg"
                    alt="Latte Art Large"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Small Bottom */}
                <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/Palpitate/1.jpg"
                    alt="Latte Art Small"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column Images */}
              <div className="flex flex-col gap-2 md:gap-4 h-full">
                {/* Small Top */}
                <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/Palpitate/5.jpg"
                    alt="Latte Art Wide 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Small Middle */}
                <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/CStudio/1.jpg"
                    alt="Latte Art Wide 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Large Bottom */}
                <div className="relative w-full flex-2 min-h-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/CStudio/4.jpg"
                    alt="Coffee Dark"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- INTRODUCTION SECTION --- */}
      <div className="w-full bg-white pt-15 md:pt-15 pb-15 flex justify-center">

        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* --- Left Column: Content --- */}
          <div className="md:col-span-8 flex flex-col gap-8">
            <div className={`${montserrat.className} space-y-10 text-sm md:text-lg text-black text-justify font-normal leading-relaxed px-3 md:px-8`}>
              <p>Coffee is life. Some would even agree that it’s enough to bring the deceased back to the world of the living. Though this is quite an awfully excessive way of describing its remarkable potency, one cannot deny its caffeine magic especially in this fast-paced world plagued with school works and professional obligations that constantly comes with looming deadlines. From early morning jeepney rides to late night study sessions, coffee has been more than just a caffeine fix to kick start our day.  It has become a pause, a ritual, a sip of relaxation, or, for others, a form of self-comfort. However, while our coffee cups are often filled with three-in-one mixes or cafe brews, how often do we stop and wonder:<span className="font-semibold italic"> Is coffee just a simple drink in a simple cup? Can it be so much more than that?</span></p>
              <p>Beyond its warm, toasted aroma and Instagrammable latte art aesthetics, lies a story literally and figuratively rooted in history and its brewing culture along the busy streets and heritage districts of Iloilo. Blending tradition with modern tastes, Iloilo’s coffee scene reflects creativity and the growing appreciation of coffee drinkers and enthusiasts alike, making coffee a familiar companion in the Ilonggo way of life. </p>
              <p>Iloilo’s coffee history dates back in the post-war era, when its distinct coffee identity took shape through public market venues. One of the oldest coffee shops in Iloilo is the Madge Cafe, established in the 1940s inside La Paz Public Market. Beloved by the Ilonggo Community, then and now, Madge Cafe initiated the coffee-drinking culture in Iloilo for its traditional brews of raw coffee flavors. Another early coffee establishment is Glory’s Cafe, founded in 1948 and took up space in the Iloilo Central Market area, serving traditional brewing of local barako-style coffee.</p>
              <p>From its early beginnings in public markets, coffee in Iloilo has been closely tied with community life. Traditional kapehan and the later emergence of modern cafes serves not merely as a place for drinking coffee but as social spaces where conversations unfold, ideas circulate, and a shared sense of belonging is cultivated. These spaces introduced premium and speciality coffee, single-origin beans and more refined brewing methods while still honoring traditional preferences for strong, flavorful brews. Many cafes in Iloilo highlighted their use of local beans from various provinces: Calinog, Igbaras, Leon, Maasin, Dingle, Anilao and Banate; blending heritage with innovation. Rather than replacing the traditional way of brewing coffee, modern cafes have reimagined these coffee spaces as sites of creativity, work and leisure for younger coffee enthusiasts and drinkers, while maintaining the Ilonggo emphasis on warmth, comfort, hospitality, and social connection.</p>
              <p>Today, coffee in Iloilo is more than just a simple drink served in a simple cup. It has become an evolving expression of Ilonggo identity. Whether enjoyed in the bustling public markets, decades-old kapehan, coffee carts, cozy and aesthetically curated cafes, coffee continues to reflect the values of community, accessibility, and shared experience. Its evolution mirrors the capacity of Ilonggos to preserve tradition while embracing modern influences making coffee not only a beverage but a cultural practice that connects the past and the present. </p>
            </div>
          </div>

          {/* --- Right Column: Directory Sidebar --- */}
          <div className="md:col-span-4 flex flex-col gap-6 pl-4 md:pl-10 sticky top-25 self-start">

            <h3 className={`${montserrat.className} text-brand-brown font-semibold text-lg uppercase tracking-wide`}>
              Iloilo City Districts Directory
            </h3>

            <ul className={`${montserrat.className} space-y-3 text-[#737373] font-normal text-base md:text-lg`}>
              {[
                { name: "District of City Proper", filterName: "Iloilo City" },
                { name: "District of Jaro", filterName: "Jaro" },
                { name: "District of La Paz", filterName: "La Paz" },
                { name: "District of Lapuz", filterName: "Lapuz" },
                { name: "District of Mandurriao", filterName: "Mandurriao" },
                { name: "District of Molo", filterName: "Molo" },
                { name: "District of Villa", filterName: "Villa" },
              ].map((district) => (
                <li key={district.filterName} className="hover:text-[#5B4332] cursor-pointer transition-colors">
                  {/* Updated Link to pass query parameter for filtering */}
                  <Link href={`/news?district=${encodeURIComponent(district.filterName)}`}>
                    {district.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-85 h-[0.5px] bg-[#989797] my-2"></div>

            {/* Facebook Link with inline SVG */}
            <a href="#" className={`${montserrat.className} flex items-center gap-3 text-[#737373] hover:text-[#5B4332] transition-colors group`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-[#5B4332]"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="font-light text-lg">Follow us on Facebook</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
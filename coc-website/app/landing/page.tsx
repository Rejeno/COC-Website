import Image from "next/image";
import { montserrat } from '../../lib/font';
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full flex flex-col items-center bg-white">

            {/* --- PART 1: GRAY BACKGROUND SECTION --- */}
            <div className="relative h-204 w-360 bg-white pt-30 px-4 flex flex-col items-center text-center gap-10 rounded-b-[40px] overflow-hidden">

                {/* DECORATIVE ELLIPSES (Positioned absolute bottom-left/right of this gray box) */}
                <div className="absolute bottom-0 left-0 z-0 pointer-events-none">
                    <Image
                        src="/hero-images/ellipse1.svg"
                        alt="Gradient Blur Left"
                        width={900}
                        height={1000}
                        className="object-contain"
                    />
                </div>
                <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
                    <Image
                        src="/hero-images/ellipse2.svg"
                        alt="Gradient Blur Right"
                        width={900}
                        height={1000}
                        className="object-contain"
                    />
                </div>

                {/* TEXT CONTENT (z-10 to sit above ellipses) */}
                <div className="relative z-10 space-y-6 max-w-5xl">
                    <h1 className={`${montserrat.className} text-8xl text-brand-brown font-medium leading-tight`}>
                        <span className="block whitespace-nowrap">Strong Coffee.</span>
                        <span className="block whitespace-nowrap">Strong Opinions.</span>
                    </h1>

                    <button className="bg-accent-brown hover:bg-[#8e6a45] text-white px-7 pt-4 pb-5 rounded-[15px] text-2xl font-medium transition-colors duration-200">
                        Read an article
                    </button>
                </div>
            </div>

            {/* --- PART 2: THE CARD --- */}
            <div className="relative z-20 -mt-80 w-300">
                {/* Outer Grayish Transparent Border Wrapper */}
                <div className="bg-[#DFDADA69] w-full p-8 rounded-[25px] backdrop-blur-md">

                    {/* Inner White Card */}
                    <div className="w-full bg-white backdrop-blur-md p-20 rounded-[25px]">

                        {/* Grid Layout */}
                        <div className="grid grid-cols-2 gap-4 h-150">

                            {/* Left Column Images */}
                            <div className="flex flex-col gap-4 h-full">
                                {/* Large Top */}
                                <div className="relative w-full flex-3 min-h-0 overflow-hidden rounded-2xl">
                                    <Image
                                        src="/hero-images/coffee.png"
                                        alt="Latte Art Large"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Small Bottom */}
                                <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-2xl">
                                    <Image
                                        src="/hero-images/coffee.png"
                                        alt="Latte Art Small"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Right Column Images */}
                            <div className="flex flex-col gap-4 h-full">
                                {/* Small Top */}
                                <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-2xl">
                                    <Image
                                        src="/hero-images/coffee.png"
                                        alt="Latte Art Wide 1"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Small Middle */}
                                <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-2xl">
                                    <Image
                                        src="/hero-images/coffee.png"
                                        alt="Latte Art Wide 2"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Large Bottom */}
                                <div className="relative w-full flex-2 min-h-0 overflow-hidden rounded-2xl">
                                    <Image
                                        src="/hero-images/coffee.png"
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
            <div className="w-full bg-white pt-40 pb-20 flex justify-center">

                <div className="w-full max-w-300px px-4 grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* --- Left Column: Content --- */}
                    <div className="md:col-span-8 flex flex-col gap-8">
                        <h2 className={`${montserrat.className} text-6xl font-bold text-brand-brown pl-7`}>
                            Introduction
                        </h2>

                        <div className={`${montserrat.className} space-y-10 text-xl text-black font-normal leading-relaxed px-10`}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                                incidunt. Blanditiis, veritatis rem tempora consequatur atque delectus
                                eaque earum repudiandae quidem mollitia unde sequi autem magnam quibusdam. Q
                                uidem, fugit nostrum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                                incidunt. Blanditiis, veritatis rem tempora consequatur atque delectus
                                eaque earum repudiandae quidem mollitia unde sequi autem magnam quibusdam. Q
                                uidem, fugit nostrum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                                incidunt. Blanditiis, veritatis rem tempora consequatur atque delectus
                                eaque earum repudiandae quidem mollitia unde sequi autem magnam quibusdam. Q
                                uidem, fugit nostrum.</p>
                        </div>
                    </div>

                    {/* --- Right Column: Directory Sidebar --- */}
                    <div className="col-span-4 flex flex-col gap-6 pl-10 pt-8">

                        <h3 className={`${montserrat.className} text-brand-brown font-semibold text-lg uppercase tracking-wide`}>
                            Iloilo City Districts Directory
                        </h3>

                        <ul className={`${montserrat.className} space-y-3 text-[#737373] font-normal text-lg`}>
                            {[
                                { name: "District of City Proper", slug: "city-proper" },
                                { name: "District of Jaro", slug: "jaro" },
                                { name: "District of La Paz", slug: "la-paz" },
                                { name: "District of Lapuz", slug: "lapuz" },
                                { name: "District of Mandurriao", slug: "mandurriao" },
                                { name: "District of Molo", slug: "molo" },
                                { name: "District of Villa", slug: "villa" },
                            ].map((district) => (
                                <li key={district.slug} className="hover:text-[#5B4332] cursor-pointer transition-colors">
                                    <Link href={`/districts/${district.slug}`}>
                                        {district.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Divider */}
                        <div className="w-85 h-0.5 bg-[#989797] my-2"></div>

                        {/* Facebook Link */}
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
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            <span className="font-light text-lg">Follow us on Facebook</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
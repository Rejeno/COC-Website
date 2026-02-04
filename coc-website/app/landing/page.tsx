import Image from "next/image";
import { montserrat } from '../../lib/font';

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
            <div className="pb-20"></div>
        </section>
    );
}
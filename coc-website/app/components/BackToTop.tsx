'use client';

export default function BackToTop() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="group flex items-center gap-3 px-5 py-2.5 border border-[#6D7E5E] rounded-xl text-white transition-all hover:bg-[#6D7E5E] hover:text-white"
    >
      {/* Up Arrow SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5} 
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
      <span className="font-medium text-sm md:text-base">Back to Top</span>
    </button>
  );
}
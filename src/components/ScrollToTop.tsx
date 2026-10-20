
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#082A4A] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0878E8] focus:outline-none focus:ring-4 focus:ring-blue-200 sm:bottom-8 sm:right-8 ${
        isVisible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}

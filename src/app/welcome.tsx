"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "EN", name: "ENGLISH", message: "WELCOME TO" },
  { code: "IG", name: "IGBO", message: "NNOO NA" },
  { code: "HA", name: "HAUSA", message: "BARKA DA ZUWA" },
  { code: "YO", name: "YORUBA", message: "KAABO SI" },
];

export default function Welcome() {
  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-hero overflow-hidden px-4 py-8">
      
      {/* Glassmorphism Card - Fully Responsive */}
      <div className="relative w-full max-w-[998px] mx-auto 
                      rounded-3xl sm:rounded-3xl md:rounded-[30px]
                      bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl
                      px-6 py-12 
                      sm:px-10 sm:py-16 
                      md:px-12 md:py-20 
                      lg:px-20 lg:py-24">

        {/* Language Dropdown - Responsive Positioning */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 sm:gap-3 
                       text-white font-medium font-geist uppercase tracking-widest 
                       text-xs sm:text-sm 
                       px-4 sm:px-6 py-2.5 sm:py-3 transition-all"
          >
            {selected.name}
            <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu - Mobile Optimized */}
          {isOpen && (
            <div className="absolute top-full mt-2 right-0 
                            w-44 sm:w-56 
                            bg-black/80 backdrop-blur-2xl border border-white/20 
                            rounded-2xl shadow-2xl overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.name}
                  onClick={() => {
                    setSelected(lang);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 sm:px-6 py-3.5 sm:py-4 
                              text-white/90 uppercase tracking-widest text-xs sm:text-sm font-medium
                              hover:bg-white/10 transition-all
                              ${selected.name === lang.name ? "bg-white/20" : ""}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          <div className="w-full">
            {/* Welcome Message - Perfect Scaling */}
            <h1 className="font-kumbh font-bold uppercase text-white 
                           text-4xl 
                           xs:text-5xl 
                           sm:text-6xl 
                           md:text-7xl 
                           lg:text-8xl 
                           xl:text-[80px] 
                           leading-tight sm:leading-snug md:leading-normal lg:leading-[90px] xl:leading-[110px] 
                           tracking-tight">
              {selected.message}
              <br />
              <span className="block mt-2 sm:mt-4 text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[100px]">
                SEPTILLION
              </span>
            </h1>
          </div>

          {/* Button - Mobile Friendly */}
          <Link href="/home" className="w-full max-w-sm sm:max-w-md">
            <Button className="w-full 
                               h-14 sm:h-16 md:h-[72px] 
                               px-8 sm:px-12 md:px-16 lg:px-[105px] 
                               rounded-full 
                               bg-indigo-600 hover:bg-indigo-700 
                               border border-white/30 
                               text-white font-medium uppercase 
                               text-sm sm:text-base md:text-lg 
                               tracking-wider 
                               shadow-lg hover:shadow-xl 
                               transition-all duration-300">
              Explore Septillion
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
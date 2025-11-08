"use client"
import { useState, useEffect } from "react";

import {Button} from '@/components/ui/button';




export default function Welcome() {

    const texts = [
    { language: "IGBO", message: "NNOO NA " },
    { language: "YORUBA", message: "KAABO SI " },
    { language: "HAUSA", message: "BARKA DA ZUWA " },
    { language: "ENGLISH", message: "WELCOME TO " },
  ];

  const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[url('/space-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-[998px] mx-auto my-8 sm:my-12 md:my-16 lg:my-20 rounded-2xl sm:rounded-3xl md:rounded-[30px] opacity-100 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-700">
        <div className="flex flex-col items-center justify-center text-center px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-14 lg:px-20 lg:py-16 space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
            <div className="w-full">
                <p className="font-geist font-medium uppercase text-center text-gray-300 text-xs sm:text-sm md:text-base leading-none mb-2 sm:mb-3 md:mb-4 tracking-normal">
                  {texts[index].language}
                </p>
                <h1 className="font-kumbh font-bold uppercase text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px] leading-tight sm:leading-snug md:leading-normal lg:leading-[90px] xl:leading-[110px] tracking-normal text-center mb-4 sm:mb-6 md:mb-8 transition-all duration-700 px-2">
                  {texts[index].message} <br />
                  <span className="block sm:inline">SEPTILLION</span>
                </h1>
            </div>
        <Button className="font-instrument w-full max-w-[280px] sm:max-w-[320px] md:w-[363px] h-12 sm:h-14 md:h-16 lg:h-[72px] py-2.5 sm:py-3 md:py-5 lg:py-[25px] px-4 sm:px-8 md:px-12 lg:px-[105px] rounded-[50px] border border-white/30 bg-indigo-600 hover:bg-indigo-700 text-white font-medium uppercase text-sm sm:text-base md:text-[18px] leading-none tracking-normal text-center opacity-100 transition-all duration-300">
          Explore Septillion
        </Button>
      </div>
      </div>

      {/* Glowing background elements */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
    </div>

  );
}
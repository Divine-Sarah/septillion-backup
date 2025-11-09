"use client"
import { useState, useEffect, useRef } from "react";

import {Button} from '@/components/ui/button';




export default function Welcome() {

    const texts = [
        { language: "ENGLISH", message: "WELCOME TO " },
    { language: "IGBO", message: "NNOO NA " },
    { language: "HAUSA", message: "BARKA DA ZUWA " },
    { language: "YORUBA", message: "KAABO SI " },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setFade(false);
      
      // After fade out completes, change text and fade in
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 100); // Very fast transition
    }, 3000); // Interval for text changes
    
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [texts.length]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-hero overflow-hidden px-4 sm:px-6 md:px-8">
      

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-[998px] mx-auto my-8 sm:my-12 md:my-16 lg:my-20 rounded-2xl sm:rounded-3xl md:rounded-[30px] opacity-100 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-700">
        <div className="flex flex-col items-center justify-center text-center px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-14 lg:px-20 lg:py-16 space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
            <div className="w-full">
                <p className={`font-geist font-medium uppercase text-center text-white text-xs sm:text-sm md:text-base leading-none mb-2 sm:mb-3 md:mb-4 tracking-normal transition-opacity duration-150 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  {texts[index].language}
                </p>
                <h1 className={`font-kumbh font-bold uppercase text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px] leading-tight sm:leading-snug md:leading-normal lg:leading-[90px] xl:leading-[110px] tracking-normal text-center mb-4 sm:mb-6 md:mb-8 transition-opacity duration-150 ease-in-out px-2 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  {texts[index].message} <br />
                </h1>
                  <span className="block sm:inline font-kumbh font-bold uppercase text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px] leading-tight">SEPTILLION</span>
            </div>
        <Button className="font-instrument w-full max-w-[280px] sm:max-w-[320px] md:w-[363px] h-12 sm:h-14 md:h-16 lg:h-[72px] py-2.5 sm:py-3 md:py-5 lg:py-[25px] px-4 sm:px-8 md:px-12 lg:px-[105px] rounded-[50px] border border-white/30 bg-indigo-600 hover:bg-indigo-700 text-white font-medium uppercase text-sm sm:text-base md:text-[18px] leading-none tracking-normal text-center opacity-100 transition-all duration-300">
          Explore Septillion
        </Button>
      </div>
      </div>

    </div>

  );
}


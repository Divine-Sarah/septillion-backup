// components/auth/AuthLayout.tsx
import { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-[#0B0B12] text-white">
      
      {/* LEFT SIDE – Your Crescent Image */}
      <div className="relative flex-1 hidden lg:block">
        {/* The crescent image */}
        <Image
          src="/auth.svg"
          alt="Septillion"
          fill
          className="object-cover object-left"
          priority
          quality={100}
        />
        
       
      </div>

      {/* Mobile: Show image as background behind form */}
      <div className="absolute inset-0 lg:hidden -z-10">
        <Image
          src="/auth.svg"
          alt=""
          fill
          className="object-cover object-left opacity-40"
          priority
        />
      </div>

      {/* RIGHT SIDE – Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-16 relative z-10">
        <div className="w-full space-y-8">
          {/* Title & Subtitle */}
          <div className="">
            <h1 className="text-[30px]  font-bold leading-[120%]">
              {title}
            </h1>
            <p className="mt-4 text-gray-300 text-lg lg:text-xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Children (your form inputs) */}
          {children}
        </div>
      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs sm:text-sm text-center">
        © 2025 Septillion. All rights reserved.
      </div>
      </div>

    </div>
  );
}
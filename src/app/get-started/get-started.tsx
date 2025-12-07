"use client";
// app/signup/page.tsx
import Link from "next/link";
import { useState } from "react";

interface ForgotPasswordFormProps {
  handleEmailSubmitted: (email: string) => void;
}

export default function SignupPage({ handleEmailSubmitted }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");

  return (
     <div className="space-y-[103px] sm:space-y-[120px] px-[21px] pt-5">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" bg-[#171724] w-full rounded-2xl px-12 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all"
        />
        <div className="space-y-6">
        <button 
          onClick={() => handleEmailSubmitted(email)}
          className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
        >
          Get Started
        </button>
          
        <p className="text-center text-[#FFFFFF] text-[18px]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#4B1FD1] hover:text-purple-300 font-semibold">
            Log in
          </Link>
        </p>
        </div>
      </div>
  );
}
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface NINVerificationProps {
  onContinue: (nin: string) => void;
  onSkip: () => void;
  onTryBVN: () => void;
}

export default function NINVerification({ onContinue, onSkip, onTryBVN }: NINVerificationProps) {
  const [nin, setNin] = useState("");

  return (
    <div className="space-y-[50px] sm:space-y-[60px] pt-5">
      <div className="space-y-4">
        <Input
          placeholder="NIN Number"
          value={nin}
          onChange={(e) => setNin(e.target.value)}
          className="bg-[#171724] text-white focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all h-[64px]"
        />
        
        <div className="text-white text-base">
          No NIN?{" "}
          <button 
            onClick={onTryBVN}
            className="text-[#4B1FD1] hover:text-purple-400 font-semibold transition-colors"
          >
            Try BVN
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => onContinue(nin)}
          className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
        >
          Continue
        </button>

        <button
          onClick={onSkip}
          className="w-full bg-[#171724] hover:bg-[#1f1f2e] text-[#4B1FD1] font-semibold text-lg rounded-full py-5 transition-all"
        >
          Skip
        </button>
      </div>
    </div>
  );
}

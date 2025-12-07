"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IdentityVerificationProps {
  onVerificationSelected: (method: "bvn" | "nin") => void;
  onSkip: () => void;
}

export default function IdentityVerification({ onVerificationSelected, onSkip }: IdentityVerificationProps) {
  const [selectedMethod, setSelectedMethod] = useState<"bvn" | "nin" | null>(null);

  return (
    <div className="space-y-[50px] sm:space-y-[60px] pt-5">
      <div className="space-y-4">
        {/* BVN Option */}
        <button
          onClick={() => setSelectedMethod("bvn")}
          className={cn(
            "w-full flex items-center justify-between p-5 rounded-2xl border transition-all",
            selectedMethod === "bvn"
              ? "bg-[#171724] border-[#5759C7] ring-1 ring-[#5759C7]"
              : "bg-[#171724] border-transparent hover:border-gray-700"
          )}
        >
          <span className="text-lg font-medium text-white">BVN Verification</span>
          <ChevronRight className="text-white" size={20} />
        </button>

        {/* NIN Option */}
        <button
          onClick={() => setSelectedMethod("nin")}
          className={cn(
            "w-full flex items-center justify-between p-5 rounded-2xl border transition-all",
            selectedMethod === "nin"
              ? "bg-[#171724] border-[#5759C7] ring-1 ring-[#5759C7]"
              : "bg-[#171724] border-transparent hover:border-gray-700"
          )}
        >
          <span className="text-lg font-medium text-white">NIN Verification</span>
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => selectedMethod && onVerificationSelected(selectedMethod)}
          disabled={!selectedMethod}
          className={cn(
            "w-full font-semibold text-lg rounded-full py-5 transition-all shadow-lg",
            selectedMethod
              ? "bg-[#4B1FD1] hover:to-blue-500 text-white"
              : "bg-[#4B1FD1]/50 text-white/50 cursor-not-allowed"
          )}
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

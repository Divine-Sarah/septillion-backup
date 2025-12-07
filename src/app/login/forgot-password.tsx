"use client";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

interface ForgotPasswordProps {
  onContinue: () => void;
  onBack: () => void;
}

export default function ForgotPassword({ onContinue, onBack }: ForgotPasswordProps) {
  return (
    <div className="space-y-[50px] sm:space-y-[60px] pt-5">
      <div className="space-y-4">
        <Input
          prefix={<Mail className="text-gray-400" size={20} />}
          placeholder="Email"
          className="bg-[#171724] text-white focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all h-[64px]"
        />
      </div>

      <div className="space-y-4">
        <button
          onClick={onContinue}
          className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
        >
          Continue
        </button>

        <button
          onClick={onBack}
          className="w-full bg-[#171724] hover:bg-[#1f1f2e] text-[#4B1FD1] font-semibold text-lg rounded-full py-5 transition-all"
        >
          Back to Log in
        </button>
      </div>
    </div>
  );
}

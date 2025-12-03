"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";

interface ResetPasswordProps {
  onReset: () => void;
  onBack: () => void;
}

export default function ResetPassword({ onReset, onBack }: ResetPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRequirements = [
    { id: 1, text: "Minimum of 8 characters" },
    { id: 2, text: "At least one UPPERCASE letter" },
    { id: 3, text: "One special character (e.g !@#$%^&*)" },
  ];

  return (
    <div className="space-y-[50px] sm:space-y-[60px] pt-5">
      <div className="space-y-[16px]">
        <Input
          type={showPassword ? "text" : "password"}
          prefix={<Lock className="text-gray-400" size={20} />}
          suffix={
            <button onClick={() => setShowPassword(!showPassword)} type="button">
              {showPassword ? (
                <EyeOff className="text-gray-400" size={20} />
              ) : (
                <Eye className="text-gray-400" size={20} />
              )}
            </button>
          }
          placeholder="Password"
          className="bg-[#171724] text-white focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all"
        />
        <Input
          type={showConfirmPassword ? "text" : "password"}
          prefix={<Lock className="text-gray-400" size={20} />}
          suffix={
            <button onClick={() => setShowConfirmPassword(!showConfirmPassword)} type="button">
              {showConfirmPassword ? (
                <EyeOff className="text-gray-400" size={20} />
              ) : (
                <Eye className="text-gray-400" size={20} />
              )}
            </button>
          }
          placeholder="Confirm Password"
          className="bg-[#171724] text-white focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all"
        />
      </div>

      <div className="flex flex-wrap gap-4 text-[#AAB8C2]">
        {passwordRequirements.map((req) => (
          <div key={req.id} className="flex items-center gap-2">
            <CheckCircle2 className="text-[#AAB8C2]" size={18} />
            <span className="text-sm sm:text-base">{req.text}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <button
          onClick={onReset}
          className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
        >
          Reset Password
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

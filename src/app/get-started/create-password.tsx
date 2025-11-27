"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface CreatePasswordProps {
  onPasswordSubmitted: (password: string) => void;
  onBack: () => void;
}

const passwordRequirements = [
  { id: 1, text: "Minimum of 8 characters" },
  { id: 2, text: "At least one UPPERCASE letter" },
  { id: 3, text: "One special character (e.g !@#$%^&*)" },
];

export default function CreatePassword({ onPasswordSubmitted, onBack }: CreatePasswordProps) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="space-y-[50px] sm:space-y-[60px] pt-5">
            <div className="space-y-[16px]">
                <Input 
                    type="password"
                    prefix={<Lock className="text-gray-400" size={20} />} 
                    placeholder="Password" 
                    className="bg-[#171724] text-white focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input 
                    type="password"
                    prefix={<Lock className="text-gray-400" size={20} />} 
                    placeholder="Confirm Password" 
                    className="bg-[#171724] text-white" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {/* Password Requirements */}
            <div className="flex flex-wrap gap-4 text-[#AAB8C2]">
                {passwordRequirements.map((req) => (
                    <div key={req.id} className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#AAB8C2]" size={18} />
                        <span className="text-sm sm:text-base">{req.text}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <button 
                    onClick={() => onPasswordSubmitted(password)}
                    className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
                >
                    Continue
                </button>
                
                <p className="text-center text-[#FFFFFF] text-[18px]">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#4B1FD1] hover:text-purple-300 font-semibold">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}
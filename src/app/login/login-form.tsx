"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  onForgotPassword: () => void;
  onLogin: () => void;
}

export default function LoginForm({ onForgotPassword, onLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-[50px] sm:space-y-[60px] pt-5">
      <div className="space-y-[16px]">
        <Input
          prefix={<Mail className="text-gray-400" size={20} />}
          placeholder="Email"
          className="bg-[#171724] text-white focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all"
        />
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
      </div>

      <div className="flex justify-start">
        <button
          onClick={onForgotPassword}
          className="text-[#4B1FD1] hover:text-purple-400 font-medium transition-colors"
        >
          Forgot Password?
        </button>
      </div>

      <div className="space-y-6">
        <button
          onClick={onLogin}
          className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
        >
          Log in your account
        </button>

        <p className="text-center text-[#FFFFFF] text-[18px]">
          New to Septillion?{" "}
          <Link href="/get-started" className="text-[#4B1FD1] hover:text-purple-300 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

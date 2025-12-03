"use client";

import { useState } from "react";
import Image from "next/image";
import LoginForm from "./login-form";
import ForgotPassword from "./forgot-password";
import OTPVerification from "./otp-verification";
import ResetPassword from "./reset-password";

type LoginStep = "login" | "forgot-password" | "otp" | "reset-password";

export default function LoginPage() {
  const [currentStep, setCurrentStep] = useState<LoginStep>("login");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden text-white container mx-auto">
      {/* LEFT SIDE – Image */}
      <div className="relative flex-1 hidden lg:block">
        <Image
          src="/auth.svg"
          alt="Septillion"
          fill
          className="object-cover object-left"
          priority
          quality={100}
        />
      </div>

      {/* Mobile: Background Image */}
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
      <div className="flex-1 flex items-center justify-center px-[17px] md:px-[65px] 2xl:px-[120px] relative z-10">
        <div className="w-full max-w-[500px]">
          {/* Title & Subtitle */}
          <div className="text-center font-kumbh mb-8">
            <h1 className="text-[30px] md:text-[44px] font-bold leading-[120%]">
              {currentStep === "login" && "Log in to your account"}
              {currentStep === "forgot-password" && "Forgot Password"}
              {currentStep === "otp" && "OTP"}
              {currentStep === "reset-password" && "Reset Password"}
            </h1>
            <p className="mt-4 text-gray-300 text-[16px] lg:text-xl leading-relaxed">
              {currentStep === "login" && "Welcome back! please enter your details"}
              {currentStep === "forgot-password" && "Enter the email address associated with your account so we can help you securely reset your password and regain access"}
              {currentStep === "otp" && "An OTP has been sent to your email address. Kindly input it below to authenticate your access."}
              {currentStep === "reset-password" && "Enter a Strong New Password Below"}
            </p>
          </div>

          {currentStep === "login" && (
            <LoginForm
              onForgotPassword={() => setCurrentStep("forgot-password")}
              onLogin={() => console.log("Login clicked")}
            />
          )}

          {currentStep === "forgot-password" && (
            <ForgotPassword
              onContinue={() => setCurrentStep("otp")}
              onBack={() => setCurrentStep("login")}
            />
          )}

          {currentStep === "otp" && (
            <OTPVerification
              onContinue={(otp) => {
                console.log("OTP Submitted:", otp);
                setCurrentStep("reset-password");
              }}
            />
          )}

          {currentStep === "reset-password" && (
            <ResetPassword
              onReset={() => {
                console.log("Password Reset");
                setCurrentStep("login");
              }}
              onBack={() => setCurrentStep("login")}
            />
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs sm:text-sm text-center">
          © 2025 Septillion. All rights reserved.
        </div>
      </div>
    </div>
  );
}

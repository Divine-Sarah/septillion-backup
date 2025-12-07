// components/auth/AuthLayout.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import GetStarted from "./get-started";
import VerifyEmail from "./email-verification";
import PersonalInfo from "./personal-info";
import CreatePassword from "./create-password";
import IdentityVerification from "./identity-verification";
import BVNVerification from "./bvn-verification";
import NINVerification from "./nin-verification";

// interface AuthLayoutProps {
//   children: ReactNode;
//   title: string;
//   subtitle: string;
// }

type SignUpStep = "email" | "otp" | "personal-info" | "password" | "identity-verification" | "bvn-verification" | "nin-verification";


export default function AuthLayout() {
  const [currentStep, setCurrentStep] = useState<SignUpStep>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

    const handleEmailSubmitted = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setCurrentStep("otp");
  };

  const handleOtpSubmitted = (submittedOtp: string) => {
    setOtp(submittedOtp);
    setCurrentStep("personal-info");
  };

  const handlePersonalInfoSubmitted = (submittedPersonalInfo: string) => {
    setCurrentStep("password");
  };
   
  const handlePasswordSubmitted = (submittedPassword: string) => {
    setCurrentStep("identity-verification");
  };
  
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden text-white container mx-auto">
      
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
      <div className="flex-1 flex items-center justify-center px-[17px] md:px-[65px] 2xl:px-[120px] relative z-10">
        <div className="">
          {/* Title & Subtitle */}
          <div className="text-center font-kumbh">
            <h1 className="text-[30px] md:text-[44px] font-bold leading-[120%]">
              {currentStep === "email" && "Get started with Septillion"}
            {currentStep === "otp" && "Email Verification"}
            {currentStep === "personal-info" && "Personal Information"}
            {currentStep === "password" && "Create Password"}
            {currentStep === "identity-verification" && "Identity Verification"}
            {currentStep === "bvn-verification" && "BVN Verification"}
            {currentStep === "nin-verification" && "NIN Verification"}
            </h1>
            <p className="mt-4 text-gray-300 text-[16px] lg:text-xl leading-relaxed">
             {currentStep === "email" && "Septillion makes it easy to explore opportunities, grow your assets, and discover how investing can truly fit your lifestyle."}
            {currentStep === "otp" && "Verify your email address so we can confirm it’s really you and ensure your account stays protected."}
            {currentStep === "personal-info" && "Enter Your Personal Details So We Can Set Up Your Profile"}
            {currentStep === "password" && "Create a Highly Secure Password to Keep Your Account Protected and Ensure Only You Have Access"}
            {currentStep === "identity-verification" && "Upload an ID card or ID number to confirm your identity"}
            {currentStep === "bvn-verification" && "BVN Helps Verify and Protect Your Financial Identity Across All Banking Platforms"}
            {currentStep === "nin-verification" && "NIN Helps Verify and Protect Your Financial Identity Across All Banking Platforms"}
            </p>
          </div>

           {currentStep === "email" && (
          <GetStarted  handleEmailSubmitted={handleEmailSubmitted}/>
        )}

         {currentStep === "otp" && (
          <VerifyEmail 
           onBack={() => setCurrentStep("email")}
          onOTPVerified={handleOtpSubmitted}/>
        )}
         {currentStep === "personal-info" && (
          <PersonalInfo  
           onPersonalInfoSubmitted={handlePersonalInfoSubmitted}
           onBack={() => setCurrentStep("otp")}
           />
        )}
        {currentStep === "password" && (
          <CreatePassword 
           onBack={() => setCurrentStep("personal-info")}
           onPasswordSubmitted={handlePasswordSubmitted}
           />
        )}
        {currentStep === "identity-verification" && (
          <IdentityVerification
            onVerificationSelected={(method: "bvn" | "nin") => {
              if (method === "bvn") {
                setCurrentStep("bvn-verification");
              } else {
                setCurrentStep("nin-verification");
              }
            }}
            onSkip={() => {
              console.log("Skipped verification");
            }}
          />
        )}
        {currentStep === "bvn-verification" && (
          <BVNVerification
            onContinue={(bvn: string) => {
              console.log("BVN Submitted:", bvn);
              // Proceed to next step
            }}
            onSkip={() => {
              console.log("Skipped BVN verification");
            }}
            onTryNIN={() => {
              setCurrentStep("nin-verification");
            }}
          />
        )}
        {currentStep === "nin-verification" && (
          <NINVerification
            onContinue={(nin: string) => {
              console.log("NIN Submitted:", nin);
              // Proceed to next step
            }}
            onSkip={() => {
              console.log("Skipped NIN verification");
            }}
            onTryBVN={() => {
              setCurrentStep("bvn-verification");
            }}
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
"use client"
// app/verify-otp/page.tsx
import { useState } from "react";
import OTPInput from "react-otp-input";
import Link from "next/link";


interface OTPVerificationFormProps {
  onOTPVerified: (otp: string) => void;
  onBack: () => void;
}

export default function OTPPage({ onOTPVerified, onBack }: OTPVerificationFormProps) {
  const [otp, setOtp] = useState("");

  return (
       <div className="space-y-[103px] sm:space-y-[120px] px-[21px] pt-5">
        <div className="flex flex-col items-center justify-center gap-5">
       <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span className="mx-2" />}
                        renderInput={(props) => (
                          <input
                            {...props}
                            style={{
                                margin: "0 4px",
                                textAlign: "center",
                                fontSize: "18px",
                                borderRadius: "10px",
                                
                            }}
                            className="w-10 h-10 sm:w-16 sm:h-16 text-center text-lg bg-[#171724] rounded-md items-center  focus:outline-none"
                          />
                        )}
                      />
        <p className="text-[#AAB8C2] text-[16px] font-medium">We’ve sent a code to <span className="underline">example@gmail.com</span>. Please be sure to check your spam folder too.</p>
        </div>


<div className="space-y-6">

        <button 
          onClick={() => onOTPVerified(otp)}
          className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
        >
          Verify & Continue
        </button>
         <p className="text-center text-[#FFFFFF]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#4B1FD1] hover:text-purple-300 font-medium">
            Log in
          </Link>
        </p>
</div>
      </div>
  );
}
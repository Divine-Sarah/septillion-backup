"use client";
import { useState } from "react";
import OTPInput from "react-otp-input";

interface OTPVerificationProps {
  onContinue: (otp: string) => void;
}

export default function OTPVerification({ onContinue }: OTPVerificationProps) {
  const [otp, setOtp] = useState("");

  return (
    <div className="space-y-[50px] sm:space-y-[60px] pt-5">
      <div className="flex justify-center">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="w-4"></span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "64px",
            height: "64px",
            fontSize: "24px",
            borderRadius: "12px",
            backgroundColor: "#171724",
            color: "white",
            border: "1px solid transparent",
            outline: "none",
          }}
          containerStyle="flex justify-center"
          shouldAutoFocus
        />
      </div>

      <div className="space-y-6">
        <button
          onClick={() => onContinue(otp)}
          className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg"
        >
          Continue
        </button>

        <p className="text-center text-[#FFFFFF] text-[18px]">
          Didn't receive any code?{" "}
          <button className="text-[#4B1FD1] hover:text-purple-300 font-semibold">
            Resend Code
          </button>
        </p>
      </div>
    </div>
  );
}

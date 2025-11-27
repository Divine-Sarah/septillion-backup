"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import gender from "../../../public/gender.svg"
import Image from "next/image";
import Link from "next/link";


interface PersonalInfoProps {
  onPersonalInfoSubmitted: (personalInfo: string) => void;
  onBack: () => void;
}

export default function PersonalInfo({ onPersonalInfoSubmitted, onBack }: PersonalInfoProps) {
  const [personalInfo, setPersonalInfo] = useState("");
  return (
    <div className="space-y-[50px] sm:space-y-[60px]  pt-5">
        <div className="space-y-[16px]">
      <Input prefix={<User />}  placeholder="First Name" className="bg-[#171724]  focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all " />
      <Input prefix={<User />}  placeholder="Phone Number" className="bg-[#171724] " />
      <Input prefix={<Image src={gender} alt="gender" />}  placeholder="Gender" className="bg-[#171724] " />
      <Input prefix={<User />}  placeholder="Date of Birth" className="bg-[#171724] " />
      <Input prefix={<User />}  placeholder="Marital Status" className="bg-[#171724] " />
        </div>


         <div className="space-y-6">
        <button 
          onClick={() => onPersonalInfoSubmitted(personalInfo)}
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
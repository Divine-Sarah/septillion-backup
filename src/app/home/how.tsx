import React from "react";
import Image from "next/image";
// import { icons } from "lucide-react";
import { ChartBarDecreasing, ChartLine, Users } from 'lucide-react';

const works = [
    {
        icons:  ChartBarDecreasing,
        label : "Real-Time Market Data",
        text: "Access live stock prices, market movements, and trading volumes across Nigerian and African exchanges. Stay ahead with instant updates.",

    },
    {
        icons:  ChartLine,
        label : "Advanced Analytics Tools",
        text: "Professional-grade charting, technical indicators, and data visualization tools to analyze market trends and make informed decisions.",

    },
    {
        icons:  Users,
        label : "Vibrant Investment Community",
        text: "Connect with fellow traders, share insights, and learn from experienced investors. Collaborate and grow together in a supportive environment.",

    },
    {
        icons:  ChartLine,
        label : "Democratized Access",
        text: "Breaking down barriers to financial information. Septillion brings institutional-quality data and tools to every African investor.",

    },
]

const How = () => {
  return (
    <div className="bg-[#0B0B12] lg:py-[120px] py-10">
      <div className=" flex justify-center items-center px-4">
        <div className="space-y-6 w-full max-w-[864px] pb-[25px]">
          <h1 className="font-kumbh font-semibold text-[24px] lg:text-[32px] leading-[120%] tracking-[0] text-center text-[#FFFFFF]">
            How Septillion Works
          </h1>
          <p className="font-kumbh font-medium text-[16px] sm:text-[24px] leading-[100%] text-[#AAB8C2] text-center ">
            Septillion is a financial data and analytics platform built to
            represent, visualize, and democratize access to the Nigerian and
            African stock markets.
          </p>
        </div>
      </div>
      <section className="app-container flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {works.map((work, index) => {
        const Icon = work.icons;
        return(
      <div
        key={index}
        className="bg-[#2F2B86] py-6 px-4 rounded-[10px] flex flex-col items-start space-y-[15px] 
                   hover:bg-[#3a35a0] transition-all duration-300 
                   border border-purple-900/50"
      >
        {/* Icon */}
     {/* Icon with cool background */}
            <div className=" bg-purple-600/20 rounded-xl flex items-center justify-center 
                            group-hover:bg-purple-600/40 transition-colors">
              <Icon className=" text-purple-300 group-hover:text-white transition-colors" />
            </div>

        {/* Label */}
        <h3 className="text-[#FFFFFF] leading-[100%] md:text-[17px]  font-semibold">{work.label}</h3>

        {/* Description */}
        <p className="text-[#FFFFFF] font-normal text-[16px] leading-6  md:leading-[100%] flex-1">
          {work.text}
        </p>
      </div>
        )
}
    )}
  </div>
 
    <Image src="./how.svg" alt="" width={591} height={701} />
      </section>
    </div>
  );
};

export default How;

import React from "react";
import Image from "next/image";

const teamCount = 8;

const Investors = () => {
  return (
    <section className="bg-[#0B0B12] lg:py-[120px] py-10">
      <div className=" flex justify-center items-center ">
        <div className="space-y-6 lg:w-[864px] w-[396px] pb-[25px]">
          <h1 className="font-kumbh font-semibold text-[30px] lg:text-[48px] leading-[120%] tracking-[0] text-center text-[#FFFFFF]">
            Trusted by Investors Like You
          </h1>
          <p className="font-kumbh font-medium text-[18px] sm:text-[24px] leading-[100%] text-[#AAB8C2] text-center ">
            Join thousands of Nigerian traders and investors who trust
            Septillion for their financial journey
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 sm:px-[172px] px-12 gap-6 lg:gap-[68px]">
          {Array.from({ length: teamCount }).map((_, i) => (
            <Image
              key={i}
              src="/person.svg"
              width={180}
              height={180}
              alt={`Team member ${i + 1}`}
              className=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investors;

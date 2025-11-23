"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HeroSection = () => {
  // Left → Right (default direction)
  const autoplayLeft = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  // Right → Left (reverse direction)
  const autoplayRight = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  const testimonials = [
    {
      language: "English",
      message:
        "Septillion changed how I trade. Real-time data at my fingertips, clearer insights, and faster decisions. It feels like having a professional market tool made just for everyday investors like me.",
      name: "Adebayo Okonkwo",
      age: "34 years",
      location: "Lagos",
      image: "/avatars/male1.jpg",
    },
    {
      language: "Igbo",
      message:
        "Finally, a platform that truly understands the African market. The data and experience are on point.",
      name: "Chioma Nwachukwu",
      age: "28 years",
      location: "Enugu",
      image: "/avatars/female1.jpg",
    },
    {
      language: "Hausa",
      message:
        "The analytics tools helped me make smarter investment decisions. The confidence it gave me is priceless.",
      name: "Ibrahim Musa",
      age: "24 years",
      location: "Kano",
      image: "/avatars/male2.jpg",
    },
    {
      language: "Hausa",
      message:
        "The analytics tools helped me make smarter investment decisions. The confidence it gave me is priceless.",
      name: "Ibrahim Musa",
      age: "24 years",
      location: "Kano",
      image: "/avatars/male2.jpg",
    },
    {
      language: "Hausa",
      message:
        "The analytics tools helped me make smarter investment decisions. The confidence it gave me is priceless.",
      name: "Ibrahim Musa",
      age: " 24 years",
      location: "Kano",
      image: "/avatars/male2.jpg",
    },
    {
      language: "Hausa",
      message:
        "The analytics tools helped me make smarter investment decisions. The confidence it gave me is priceless.",
      name: "Ibrahim Musa",
      age: "24 years",
      location: "Kano",
      image: "/avatars/male2.jpg",
    },
    {
      language: "Hausa",
      message:
        "The analytics tools helped me make smarter investment decisions. The confidence it gave me is priceless.",
      name: "Ibrahim Musa",
      age: "24 years",
      location: "Kano",
      image: "/avatars/male2.jpg",
    },
    {
      language: "Hausa",
      message:
        "The analytics tools helped me make smarter investment decisions. The confidence it gave me is priceless.",
      name: "Ibrahim Musa",
      age: " 24 years",
      location: "Kano",
      image: "/avatars/male2.jpg",
    },
  ];

  return (
    <div className="bg-[#0B0B12] text-white relative  min-h-screen bg-hero1 overflow-hidden ">
      <section className=" flex justify-center">
        <div className=" sm:w-[796px] w-[344px] space-y-6">
          <h1 className="font-kumbh font-bold text-[40px] lg:text-[64px] leading-[120%] tracking-[0] text-center">
            Money Making Magic
          </h1>
          <p className="font-kumbh font-medium text-[16px] sm:text-[24px] leading-[100%] text-[#AAB8C2] text-center">
            Your money should work as hard as you do. That’s why Septillion
            gives you the tools to invest smarter, track market movements, and
            watch your money grow steadily over time.
          </p>
        </div>
      </section>
      <section className="flex flex-col mt-[84px] sm:mt-[120px] items-center lg:space-y-[191px] space-y-[66px]">
        <Button className="rounded-full bg-[#4B1FD1] flex items-center mx-auto  gap-4 py-3 btn-px hover:bg-purple-700 transition">
          <span className="font-kumbh font-semibold text-[16px] lg:text-[18px]">
            Get Started
          </span>
          <ArrowUpRight className="rounded-full bg-white text-[#4B1FD1] lg:w-10 lg:h-10" />
        </Button>

        <div className="flex gap-6 items-center">
          <span className="font-kumbh font-semibold text-[16px] lg:text-[18px]">
            Scroll to explore
          </span>
          <ArrowDown />
        </div>
      </section>

      <section className=" mt-[95px] lg:mt-[180px] space-y-10 lg:mb-[190px]">
        <div className="flex justify-center">
          <div className=" sm:w-[864px] w-[344px] space-y-3">
            <h1 className="font-kumbh font-semibold text-[30px] lg:[48px] text-center">
              What do Customers Say
            </h1>
            <p className="font-kumbh font-medium text-[16px] sm:text-[24px] leading-[120%] tracking-[0] text-[#AAB8C2] text-center">
              See what our customers have to say about transforming their
              investment journey with Septillion
            </p>
          </div>
        </div>
        <Carousel
         opts={{ loop: true, align: "start" }}
        plugins={[autoplayLeft.current]}
          className="w-full"
        >
          <CarouselContent className="flex items-start gap-6">
            {testimonials.map((metric, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-[350px] lg:basis-[412px] shrink-0"
              >
                <Card
                  className="bg-[#12121A] border-none text-[#FFFFFF] font-kumbh rounded-[10px] 
                          w-[412px] h-[293px] flex flex-col overflow-hidden"
                >
                  <CardContent className="flex flex-col h-full ">
                    {/* Language Tag */}
                    <span className="font-medium rounded-full px-6 py-2 bg-[#1E1E28] mb-4 w-fit">
                      {metric.language}
                    </span>

                    {/* Message - takes available space & truncates with ellipsis */}
                    <p className="text-[16px] leading-relaxed font-normal line-clamp-5 overflow-hidden">
                      {metric.message}
                    </p>

                    <div className="flex justify-between">
                      {/* Name + Location - always at the bottom */}
                      <div className="flex flex-col text-[16px] font-normal">
                        <p className="">{metric.name}</p>
                        <p className="">
                          {metric.age}.{metric.location}
                        </p>
                      </div>
                      {/* <img src="/public/Avatar.svg" alt="" />
                       */}
                       {/* <Image src="/Avatar.svg" alt=""/> */}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
         opts={{
          loop: true,
          align: "start",
          direction: "rtl",  // This is the correct way!
        }}
        plugins={[autoplayRight.current]}
          className="w-full"
        >
          <CarouselContent className="flex items-start gap-6">
            {testimonials.map((metric, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-[350px] lg:basis-[412px] shrink-0"
              >
                <Card
                  className="bg-[#12121A] border-none text-[#FFFFFF] font-kumbh rounded-[10px] 
                          w-[412px] h-[293px] flex flex-col overflow-hidden"
                >
                  <CardContent className="flex flex-col h-full ">
                    {/* Language Tag */}
                    <span className="font-medium rounded-full px-6 py-2 bg-[#1E1E28] mb-4 w-fit">
                      {metric.language}
                    </span>

                    {/* Message - takes available space & truncates with ellipsis */}
                    <p className="text-[16px] leading-relaxed font-normal line-clamp-5 overflow-hidden">
                      {metric.message}
                    </p>

                    <div className="flex justify-between">
                      {/* Name + Location - always at the bottom */}
                      <div className="flex flex-col text-[16px] font-normal">
                        <p className="">{metric.name}</p>
                        <p className="">
                          {metric.age}.{metric.location}
                        </p>
                      </div>
                      {/* <img src="" alt="" /> */}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default HeroSection;

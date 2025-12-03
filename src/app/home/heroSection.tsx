"use client";

import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

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
    <div className="bg-[#0B0B12] text-white relative min-h-screen overflow-hidden flex flex-col items-center">
      {/* Background Image - Positioned absolutely */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/heroImg.svg"
          alt="Background Glow"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Main Content - Z-index to sit on top */}
      <div className="relative z-10 w-full flex flex-col items-center pt-[118px]">
        <section className="flex justify-center px-4 w-full">
          <div className="w-full max-w-[796px] space-y-6 text-center">
            <h1 className="font-kumbh font-bold text-[40px] lg:text-[64px] leading-[120%] tracking-[0]">
              Money Making Magic
            </h1>
            <p className="font-kumbh font-medium text-[16px] sm:text-[24px] leading-[140%] text-[#AAB8C2]">
              Your money should work as hard as you do. That’s why Septillion
              gives you the tools to invest smarter, track market movements, and
              watch your money grow steadily over time.
            </p>
          </div>
        </section>

        <section className="flex flex-col mt-[60px] sm:mt-[80px] items-center space-y-[60px] sm:space-y-[80px]">
          <Button className="rounded-full bg-[#4B1FD1] flex items-center gap-4 py-6 px-8 hover:bg-purple-700 transition shadow-[0_0_30px_rgba(75,31,209,0.5)]">
            <span className="font-kumbh font-semibold text-[16px] lg:text-[18px]">
              Get Started
            </span>
            <ArrowUpRight className="rounded-full bg-white text-[#4B1FD1] p-1 w-8 h-8" />
          </Button>

          <div className="flex gap-3 items-center animate-bounce">
            <span className="font-kumbh font-medium text-[14px] lg:text-[16px] text-[#AAB8C2]">
              Scroll to explore
            </span>
            <ArrowDown className="text-[#AAB8C2] w-4 h-4" />
          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <section className="relative z-10 mt-[120px] lg:mt-[180px] space-y-10 lg:mb-[190px] w-full">
        <div className="flex justify-center px-4">
          <div className="w-full max-w-[864px] space-y-3">
            <h1 className="font-kumbh font-semibold text-[30px] lg:text-[48px] text-center">
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
                className="basis-full md:basis-1/2 lg:basis-[412px] shrink-0"
              >
                <Card
                  className="bg-[#12121A] border-none text-[#FFFFFF] font-kumbh rounded-[10px] 
                          w-full h-[293px] flex flex-col overflow-hidden"
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

                    <div className="flex justify-between mt-auto">
                      {/* Name + Location - always at the bottom */}
                      <div className="flex flex-col text-[16px] font-normal">
                        <p className="">{metric.name}</p>
                        <p className="">
                          {metric.age}.{metric.location}
                        </p>
                      </div>
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
            direction: "rtl",
          }}
          plugins={[autoplayRight.current]}
          className="w-full"
        >
          <CarouselContent className="flex items-start gap-6">
            {testimonials.map((metric, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-[412px] shrink-0"
              >
                <Card
                  className="bg-[#12121A] border-none text-[#FFFFFF] font-kumbh rounded-[10px] 
                          w-full h-[293px] flex flex-col overflow-hidden"
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

                    <div className="flex justify-between mt-auto">
                      {/* Name + Location - always at the bottom */}
                      <div className="flex flex-col text-[16px] font-normal">
                        <p className="">{metric.name}</p>
                        <p className="">
                          {metric.age}.{metric.location}
                        </p>
                      </div>
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

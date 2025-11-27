"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Languages } from "lucide-react";
import Image from "next/image";

const Languages = [
  {
    language: "English",
  },
  {
    language: "Yoruba",
  },
  {
    language: "Hausa",
  },
  {
    language: "Igbo",
  },
  {
    language: "Efik",
  },
  {
    language: "Ijaw",
  },
  {
    language: "Pigin",
  },
];

const About = () => {
  //   const [activeTab, setActiveTab] = useState("english");
  // Start with first language as default
  const [activeTab, setActiveTab] = useState(
    Languages[0].language.toLowerCase()
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Properly detect mobile with useEffect
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const selectedLanguage = Languages.find(
    (lang) => lang.language.toLowerCase() === activeTab
  )?.language;

  return (
    <div className="bg-[#5759C7] py-10 lg:py-[60px]">
      <div className="sm:flex sm:justify-center px-4">
        <div className="space-y-6 w-full max-w-[864px] ">
          <h1 className="font-kumbh font-semibold text-[24px] lg:text-[32px] leading-[120%] tracking-[0] text-center text-[#FFFFFF]">
            What is Septillion About?
          </h1>
          <p className="font-kumbh font-medium text-[16px] sm:text-[24px] leading-[100%] text-[#AAB8C2] text-center ">
            See what our customers have to say about transforming their
            investment journey with Septillion
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-[33px]">
        {isMobile ? (
          // Mobile Dropdown
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#12121A] text-white rounded-full px-6 py-3 flex items-center gap-3 min-w-[200px] justify-center"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              {selectedLanguage || "Select Language"}
              <span
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-full bg-[#12121A] rounded-lg shadow-2xl border border-gray-800 z-50 overflow-hidden">
                {Languages.map((lang) => {
                  const value = lang.language.toLowerCase();
                  return (
                    <button
                      key={value}
                      onClick={() => {
                        setActiveTab(value);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-6 py-3 transition-all ${
                        activeTab === value
                          ? "bg-purple-600 text-white font-medium"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      {lang.language}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          // Desktop Tabs
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-[#12121A] rounded-full p-2 flex flex-wrap justify-center gap-3 w-full max-w-[864px] h-auto">
              {Languages.map((lang) => {
                const value = lang.language.toLowerCase();
                return (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="rounded-full px-6 py-3 font-semibold transition-all whitespace-nowrap data-[state=active]:bg-purple-600 data-[state=active]:text-[#FFFFFF] data-[state=active]:shadow-lg data-[state=inactive]:text-[#AAB8C2] hover:data-[state=inactive]:text-[#AAB8C2] hover:data-[state=inactive]:bg-gray-800"
                  >
                    {lang.language}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="text-center">
                <Image
                  src="./about.svg"
                  width={864} // Width of the image
                  height={500} // Height of the image
                  alt="Picture of the author"
                />
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
      
    </div>
  );
};

export default About;

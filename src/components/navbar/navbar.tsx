"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { navLinks } from "./navLinks";
import Link from "next/link";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="sticky top-0 z-50 py-4  bg-[#0B0B12] shadow-sm transition-all duration-300">
        <div className="app-container  flex items-center justify-between">
          <div className="Text-white text-2xl text-white font-semibold flex items-center ">
            Septillion
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-12 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            ))}

            {/* Login + Get Started Box */}
          </div>
          <div className="hidden lg:flex  items-center bg-white rounded-full px-2 py-1">
            <Link href="/login">
              <button className="px-6 py-2 text-black font-medium rounded-full">
                Login
              </button>
            </Link>

            <Link href="/get-started">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium">
                Get Started
              </button>
            </Link>
          </div>

          {/*Mobile nav */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-4 rounded-3xl text-[#FFFFFF] bg-black/10 backdrop-blur-[30px] shadow-inner hover:bg-gray-100 transition-colors z-50"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 top-[72px] left-0 right-0 bottom-0 bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          <div
            className={`fixed inset-0 z-50 transform top-[72px] right-0 transition-transform duration-300 ease-in-out lg:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full overflow-y-auto pt-6 px-6 bg-[#12121A] text-white shadow-lg pb-6">
              <div className="space-y-8">
                <div className="space-y-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="hover:text-gray-300 transition flex flex-col  font-inter font-semibold"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-4 font-kumbh font-semibold">
                  <Link href="/login">
                    <button className="w-full bg-white text-[#040425] text-[16px] rounded-full h-[62px] px-[106px]  transition">
                      Login
                    </button>
                  </Link>

                  <Link href="/get-started">
                    <button className="w-full bg-[#4B1FD1] text-[#FFFFFF] rounded-full text-[16px] h-[62px] px-[106px] hover:bg-purple-700 transition">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

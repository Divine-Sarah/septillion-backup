"use client";

import { X } from "lucide-react";
import Link from "next/link";

interface MobileNavProps {
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileNav({ onClose }: MobileNavProps) {
  return (
    <div className="fixed inset-0  z-50 flex justify-end">
      <div className="w-64 bg-white h-full shadow-xl p-6 flex flex-col gap-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="ml-auto text-2xl "
        >
          <X size={28} />
        </button>

        {/* Nav Links */}
        <div className="flex flex-col gap-4 mt-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="text-lg text-gray-700 hover:text-purple-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-3">
          <Link
            href="/login"
            onClick={onClose}
            className="border border-gray-400 rounded-lg py-2 text-center font-medium"
          >
            Login
          </Link>

          <Link
            href="/get-started"
            onClick={onClose}
            className="bg-purple-600 text-white rounded-lg py-2 text-center font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

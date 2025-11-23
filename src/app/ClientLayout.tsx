"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = [
    "/",
    "/get-started"
  ];

  const shouldHideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <main>{children}</main>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

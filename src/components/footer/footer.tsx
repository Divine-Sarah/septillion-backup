import React from 'react'
// import { Separator } from "@/components/ui/separator"
import Image from "next/image";
// import { Apple, QrCode } from "lucide-react";


const footer = () => {
  return (
    
    <div className=' bg-[#0B0B12] app-container pt-16'>
        <section className=" bg-[#4C53D2] rounded-[30px] ">
  <div className=" lg:px-52 lg:pt-[84px] px-5 py-10 lg:pb-[52px] text-white">
    <div className='flex flex-col md:flex-row items-center justify-center  md:space-x-6 space-y-4 md:space-y-0'>
    <div className="flex items-center gap-2 text-[#AAB8C2] font-medium text-sm md:font-semibold md:text-lg">
      {/* <img src="/apple-icon.png" className="h-4" /> */}
      <Image src="./app-store.svg" alt='' width={24} height={24}/>
      <span>4.7 ⭐ On App Store</span>
      <span>250k+ Downloads</span>
    </div>
    <div className="flex items-center gap-2 text-[#AAB8C2] font-medium text-sm md:font-semibold md:text-lg">
      {/* <img src="/google-icon.png" className="h-4" /> */}
      <Image src="./google.svg" alt='' width={24} height={24}/>
      <span>4.9 ⭐ On Play Store</span>
      <span>500k+ Downloads</span>
    </div>
    </div>


  <h2 className="text-white text-3xl md:text-5xl font-semibold  text-center leading-tight">
    Money Growth, But Make It Simple and Stress Free
  </h2>

  <p className="text-[#AAB8C2] text-center">
    Investing doesn’t have to be scary. We make it clear and beginner approved.
  </p>

<div className='md:flex items-center md:px-[158px] px-[73px] justify-center md:space-x-6 space-y-4 md:space-y-0'>

<div className='bg-[#0B0B12] py-2.5 md:px-[30px] px-5 rounded-[10px] flex  gap-6'>
      <Image src="./google.svg" alt='' width={24} height={24}/>
      <div className='flex flex-col font-medium font-kumbh'>
        <span className='text-sm'>Get it on</span>
        <span className='text-lg'>Google Play</span>
      </div>
</div>

<div className='bg-[#0B0B12] py-2.5 md:px-[30px] px-5 rounded-[10px] flex  gap-6'>
      <Image src="./google.svg" alt='' width={24} height={24}/>
      <div className='flex flex-col font-medium font-kumbh'>
        <span className='text-sm'>Get it on</span>
        <span className='text-lg'>Google Play</span>
      </div>
</div>


</div>


  {/* <!-- QR Section --> */}
 <div className="bg-black text-white rounded-2xl p-6 sm:p-8 md:p-10 
                flex flex-col sm:flex-row items-center justify-between 
                gap-6 sm:gap-8 md:gap-12 
                mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-44 
                mt-6 sm:mt-8 md:mt-10 
                shadow-2xl border border-white/10">
  
  {/* Text */}
  <div className="text-center sm:text-left flex-1">
    <p className="font-medium text-white/80 text-sm sm:text-base">
      Scan to Download
    </p>
    <p className="font-bold text-xl sm:text-2xl mt-1">
      Septillion App
    </p>
  </div>

  {/* QR Code */}
  <div className="shrink-0">
    <Image
      src="/qrcode.svg"           // Put in public/qrcode.svg
      alt="Scan to download Septillion App"
      width={160}
      height={160}
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>

  </div>

</section>

        <footer className=" text-gray-300 mt-20 py-14">
    {/* <!-- About --> */}
    <div className='flex  sm:flex-row flex-col sm:items-center sm:gap-[171px] gap-10 justify-between'>
      <p className=" sm:w-[426px] font-normal text-sm sm:text-[18px]  font-kumbh text-[#FFFFFF]">
            Septillion is a financial data and analytics platform built to represent, visualize,
            and democratize access to Nigerian and African stock markets.
    </p>

  <div className=" grid grid-cols-2 md:grid-cols-3 gap-10">
    {/* <!-- Platform --> */}
    <div className='font-kumbh font-normal text-[#AAB8C2] space-y-4'>
      <h3 className='font-semibold text-[16px] sm:text-lg text-[#FFFFFF]'>Platform</h3>
      <ul className="space-y-4 text-sm sm:text-lg">
        <li><a href="#" className="hover:text-white">What is Septillion About?</a></li>
        <li><a href="#" className="hover:text-white">How Septillion works</a></li>
        <li><a href="#" className="hover:text-white">Testimonials</a></li>
        <li><a href="#" className="hover:text-white">Community</a></li>
      </ul>
    </div>

    {/* <!-- Resources --> */}
    <div className='font-kumbh font-normal  text-[#AAB8C2] space-y-4 '>
      <h3 className='font-semibold  text-[16px] sm:text-lg text-[#FFFFFF]'>Resources</h3>
      <ul className="space-y-4 text-sm  sm:text-lg">
        <li><a href="#" className="hover:text-white">Blog</a></li>
        <li><a href="#" className="hover:text-white">FAQ</a></li>
        <li><a href="#" className="hover:text-white">Help Center</a></li>
      </ul>
    </div>

    {/* <!-- Company --> */}
    <div className='font-kumbh font-normal text-sm sm:text-lg text-[#AAB8C2] space-y-4 '>
      <h3 className='font-semibold font-kumbh text-[16px] sm:text-lg text-[#FFFFFF]'>Company</h3>
      <ul className="space-y-4 text-sm">
        <li><a href="#" className="hover:text-white">About Us</a></li>
        <li><a href="#" className="hover:text-white">Career</a></li>
        <li><a href="#" className="hover:text-white">Contact Us</a></li>
      </ul>
    </div>

  </div>
    </div>

  {/* <!-- Bottom bar --> */}
  <div className="max-w-6xl mx-auto border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
    <p>© 2025 Septillion. All rights reserved.</p>
    <div className="flex gap-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-white">Terms & Services</a>
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Data Policy</a>
    </div>
  </div>
</footer>

    </div>
  )
}

export default footer
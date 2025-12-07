import React from 'react'
import Hero from './heroSection';
import About from "./about"
import How from "./how"
import Investors from "./investors"
import Faq from "./faq"
// import { Separator } from "@/components/ui/separator"

const page = () => {
  return (
    <div className="">
    <Hero/>
    <About/>
    <How/>
    <Investors/>
    <Faq/>
  </div>
  )
}

export default page
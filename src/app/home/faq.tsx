import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Septillion?",
    answer:
      "Septillion is Nigeria's most advanced investment platform, giving you real-time access to Nigerian and African stock markets with powerful tools and insights.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Yes! We use bank-level 256-bit encryption, two-factor authentication (2FA), and your funds are held with regulated custodians.",
  },
  {
    question: "Can I trade on mobile?",
    answer:
      "Absolutely! Our app is available on iOS and Android with full trading, alerts, and portfolio tracking on the go.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees. We believe in transparency — you only pay clear, low commissions per trade. No custody fees, no surprises.",
  },
  {
    question: "How fast are withdrawals?",
    answer:
      "Withdrawals are processed instantly to your bank account (T+0). Most users receive funds within minutes.",
  },
  {
    question: "Do you support fractional shares?",
    answer:
      "Yes! You can buy fractions of expensive stocks starting from just ₦1,000.",
  },
  {
    question: "Do you support fractional shares?",
    answer:
      "Yes! You can buy fractions of expensive stocks starting from just ₦1,000.",
  },
];
const Faq = () => {
  return (
    <section className="bg-[#0B0B12] lg:py-[120px] py-10">
       <div className="app-container  ">
        <div className='flex justify-center items-center'>
        <div className="space-y-6 lg:w-[864px] w-[384px] pb-[25px]">
          <h1 className="font-kumbh font-semibold text-[30px] lg:text-[48px] leading-[120%] tracking-[0] text-center text-[#FFFFFF]">
            Frequently Asked Questions
          </h1>
          <p className="font-kumbh font-medium text-[16px] sm:text-[24px] leading-[100%] text-[#AAB8C2] text-center ">
            Septillion is a financial data and analytics platform built to represent, visualize, and democratize access to the Nigerian and African stock markets.
          </p>
        </div>
        </div>
        <div className=''>
            <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-[20px] border-[#4B1FD1] border px-5"
          >
            <AccordionTrigger className="text-left text-white hover:text-purple-300 text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
'use client';

import { Disclosure } from '@headlessui/react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What is Trajectifi?',
    answer:
      'Trajectifi is a platform that allows you to use NFTs as collateral to access loans, track repayments, and manage lending securely.',
  },
  {
    question: 'How do I list my NFT as collateral?',
    answer:
      'Connect your wallet, choose the NFT you want to use, and follow the prompts to list it as collateral for a loan.',
  },
  {
    question: 'What happens if I can’t repay my loan on time?',
    answer:
      'If repayment isn’t made by the due date, the lender has the right to claim the NFT as per the agreement.',
  },
  {
    question: 'What are the fees involved?',
    answer:
      'Fees vary by loan provider and are visible before confirming a loan agreement.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#0B0C1D] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-md">
            Find quick answers to common queries in our FAQs section, designed
            to help you understand how Trajectifi works, from listing NFTs as
            collateral to loan repayment and everything in between.
          </p>
        </div>

        {/* Right Accordion Section */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="bg-[#16172A] rounded-lg overflow-hidden">
                  <Disclosure.Button className="flex justify-between items-center w-full px-6 py-5 text-left text-white font-medium focus:outline-none">
                    <span>{faq.question}</span>
                    <Image
                      src="/star-icon.svg"
                      alt="Toggle answer"
                      width={20}
                      height={20}
                      className={`transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`px-6 pb-5 text-sm text-gray-400 transition-all duration-300 ease-in-out ${
                      open ? 'max-h-96' : 'max-h-0'
                    } overflow-hidden`}
                  >
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import ThemeSelector from "./themeSelector";

const footerSections = [
  {
    title: "TRAJECTIFI",
    links: [
      { text: "Home", href: "/" },
      { text: "Terms of Use", href: "/" },
      { text: "Terms & Conditions", href: "/" },
      { text: "Documentation", href: "/" },
      { text: "GitHub", href: "/" },
      { text: "Contact Us", href: "/" },
      { text: "Vulnerability Submission", href: "/" },
      { text: "Bug Bounty Program", href: "/" },
    ],
  },
  {
    title: "LEND",
    links: [
      { text: "Collateral", href: "/" },
      { text: "Loans", href: "/" },
      { text: "Offers sent", href: "/" },
      { text: "Standing Collection Offers", href: "/" },
      { text: "Private Offers", href: "/" },
    ],
  },
  {
    title: "BORROW",
    links: [
      { text: "Get a loan now", href: "/" },
      { text: "Loans Received", href: "/" },
      { text: "Offers Received", href: "/" },
      { text: "Markets", href: "/" },
    ],
  },
  {
    title: "COMMUNITY & HELP",
    links: [
      { text: "Get a new loan", href: "/" },
      { text: "Loans Received", href: "/" },
      { text: "Offers Received", href: "/" },
      { text: "Bundles", href: "/" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { text: "Twitter", href: "/" },
      { text: "Discord", href: "/" },
      { text: "Telegram", href: "/" },
    ],
  },
];

const bottomLinks = [
  { text: "Community guidelines", link: "" },
  { text: "Terms", link: "" },
  { text: "Privacy policy", link: "" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#080A1F] py-12 lg:py-20 px-5 text-white">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 lg:gap-10  ">
        <div className="flex justify-evenly lg:gap-10">
          {/* Stay in the loop */}
          <div className="w-full lg:w-2/5 xl:w-1/4">
            <h6 className="font-bold text-xl mb-4 lg:mb-5">Stay in the loop</h6>
            <div className="flex gap-1 justify-between bg-white/5 px-4 h-14 items-center rounded-lg">
              <input
                type="email"
                placeholder="Your email"
                className="outline-none w-full text-xs placeholder:text-white bg-transparent "
              />
              <ArrowRightIcon className="text-white size-4" />
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex flex-1 gap-10 justify-evenly flex-wrap">
            {footerSections.map((section, index) => (
              <div
                key={section.title}
                className={
                  "text-nowrap " +
                  (index < 2
                    ? "flex-1"
                    : "w-1/3 xl:w-fit flex-1 xl:flex-grow-0")
                }
              >
                <p className="font-bold mb-4 ">{section.title}</p>
                <div className="flex flex-col gap-y-2">
                  {section.links.map((link) => (
                    <a
                      href={link.href}
                      className="text-sm w-fit transition-colors ease-linear text-white/60 hover:underline hover:text-white"
                      key={link.text}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-3">
          {footerSections.map((section) => (
            <Disclosure as="div" className="w-full" key={section.title}>
              {({ open }) => (
                <>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-white group-data-hover:text-white/80">
                      {section.title}
                    </span>

                    <ArrowDownIcon
                      className={
                        "group-hover:text-white size-4 text-white/60 transition-all ease-linear " +
                        (open ? "rotate-180" : "")
                      }
                    />
                  </DisclosureButton>

                  <DisclosurePanel
                    transition
                    className="mt-2 flex flex-col gap-y-2 pl-2 origin-top transition duration-500 ease-out data-closed:-translate-y-6 data-closed:opacity-0"
                  >
                    {section.links.map((link) => (
                      <a
                        href={link.href}
                        className="text-sm w-fit transition-colors ease-linear text-white/60 hover:underline hover:text-white"
                        key={link.text}
                      >
                        {link.text}
                      </a>
                    ))}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

        <hr className="w-full border-white/10 max-w-6xl" />

        <div className="flex items-center gap-8 py-2 justify-center ">
          <p className="text-xs w-fit hidden lg:inline transition-colors ease-linear text-white/60">
            © Trajectifi, Inc.
          </p>

          <div className="px-3 py-1 gap-6 flex flex-wrap items-center">
            {bottomLinks.map((link) => (
              <a
                href={link.link}
                className="text-sm w-fit transition-colors ease-linear text-white/60 hover:underline hover:text-white"
                key={link.text}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="hidden lg:block">
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

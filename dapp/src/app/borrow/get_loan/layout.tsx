"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
  {
    url: "/borrow/get_loan",
    text: "Assets (3)",
  },
  {
    url: "/borrow/get_loan/offers_received",
    text: "Offers Received (6)",
  },
  {
    url: "/borrow/get_loan/loans_received",
    text: "Loans Received (1)",
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <div className="space-y-6 sm:overflow-hidden">
      <div className="space-x-4 bg-[#13142a] w-fit p-2 py-3 rounded-3xl">
        {navs.map((nav, index) => {
          return (
            <Link
              className={path == nav.url ? "bg-[#835aff]" : " "}
              style={{
                padding: ".5em",
                borderRadius: "100px",
              }}
              href={nav.url}
              key={index}
            >
              {nav.text}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}

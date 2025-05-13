"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Search from "./Search";
import Icon from "./Icon";
import { usePathname } from "next/navigation";

const navs = [
  {
    url: "/borrow/assets",
    name: "My assets",
  },
  {
    url: "/borrow/get_loan",
    name: "Get a Loan",
  },
  {
    url: "/borrow/give_loan",
    name: "Give a Loan",
  },
];

const SideBar = () => {
  const path = usePathname();
  return (
    <div className="border-r-2 h-screen border-[#131429]  w-80 p-3 space-y-12">
      <div className="mt-5">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <Search />
      <div className="flex flex-col space-y-2">
        {navs.map((nav, index) => {
          return (
            <Link
              className={
                "flex text-center rounded-xl p-3 items-center space-x-4" +
                " " +
                (path.includes(nav.url) ? "bg-[#835aff]" : " ")
              }
              href={nav.url}
              key={index}
            >
              <div>
                <Icon src={"/images/icons/dashboard-square.svg"} />
              </div>
              <div>{nav.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import Search from "../../../../components/_components/Search";
import Image from "next/image";
import Card from "../../../../components/_components/Card";

const collections = [
    {
      name: "Cryptopunk VQ (Wrapped ETH)",
      avatar: "",
    },
    {
      name: "CLONE X-X",
      avatar: "",
    },
    {
      name: "KOLLABEAR",
      avatar: "",
    },
    {
      name: "NFT Locked Bundle        ",
      avatar: "",
    },
    {
      name: "FLUF",
      avatar: "",
    },
    {
      name: "RANGA",
      avatar: "",
    },
  ],
  cards = [
    {
      title: "Cryptopunk #1232",
      subTitle: "Cryptopunk VQ (STRK)",
      ongoing: false,
      received: false,
      offered: false,
      listed: false,
      src: "/images/NFT4.png",
    },
    {
      title: "Cryptopunk #1232",
      subTitle: "Cryptopunk VQ (STRK)",
      ongoing: false,
      received: false,
      offered: false,
      listed: false,
      src: "/images/NFT1.png",
    },
    {
      title: "Cryptopunk #1232",
      subTitle: "Cryptopunk VQ (STRK)",
      ongoing: false,
      received: false,
      offered: false,
      listed: false,
      src: "/images/NFT3.png",
    },
  ];

const page = () => {
  return (
    <div className="bg-[#13142a] flex p-4 rounded-2xl">
      {/* collections side panel */}
      <div className="bg-[#090a20] space-y-6 p-4 rounded-2xl">
        <div>Collections</div>
        <Search />
        <div className="space-y-4">
          {collections.map((nft, index) => {
            return (
              <div key={index} className="flex space-x-3">
                <input type="checkbox" name="" id="" />
                <Image
                  src={`/images/Avatar${index + 1}.png`}
                  alt={"Avatar" + index + 1}
                  width={25}
                  height={25}
                ></Image>
                <div>{nft.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Search result section */}
      <div className=" p-4">
        <div>Search Results</div>
        <div className="flex space-x-3">
          {cards.map((card, index) => {
            return (
              <Card
                listed={card.listed}
                offered={card.offered}
                received={card.received}
                ongoing={card.ongoing}
                title={card.title}
                subTitle={card.subTitle}
                src={card.src}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

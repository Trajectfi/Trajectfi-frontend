import Image from "next/image";
import React from "react";

interface CardProp {
  listed: boolean;
  offered: boolean;
  received: boolean;
  ongoing: boolean;
  title: string;
  subTitle: string;
  src: string;
}

const Card = ({
  src,
  offered,
  ongoing,
  received,
  listed,
  subTitle,
  title,
}: CardProp) => {
  return (
    <div className=" bg-[#090a20] p-2 w-fit rounded-xl">
      {received ? (
        ongoing ? (
          <div className="bg-green-600 p-2 fixed rounded-xl">Ongoing</div>
        ) : (
          <div className="bg-red-600 p-2 fixed rounded-xl">Closed</div>
        )
      ) : null}
      <Image src={src} alt={src} width={250} height={360}></Image>
      <div className="flex justify-between space-y-2 py-4 w-full items-center">
        <div>
          <div className="text-lg">{title}</div>
          <div className="text-xs" style={{ color: "#878893" }}>
            {subTitle}
          </div>
        </div>
        {listed ? (
          received ? (
            <div> Escrow</div>
          ) : (
            <div className="bg-[#1a2a32] p-2 rounded-2xl text-[#44a36b]">
              Listed
            </div>
          )
        ) : (
          <div
            className="p-2 rounded-2xl "
            style={{ color: "#e28706", backgroundColor: "#663d08" }}
          >
            Unlisted
          </div>
        )}
      </div>
      {offered ? (
        <div className="bg-[#8659fe] text-center p-2 rounded-2xl">
          {received ? "View" : "See Offers"}
        </div>
      ) : null}
    </div>
  );
};

export default Card;

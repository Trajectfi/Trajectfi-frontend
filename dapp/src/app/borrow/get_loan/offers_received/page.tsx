import React from 'react'
import Card from '../../../../../components/_components/Card';


const cards = [
    {
        title: "Cryptopunk #1232",
        subTitle: "Cryptopunk VQ (STRK)",
        ongoing: false,
        received: false,
        offered: true,
        listed: true,
        src: "/images/NFT4.png",
    },
    {
        title: "Cryptopunk #1232",
        subTitle: "Cryptopunk VQ (STRK)",
        ongoing: false,
        received: false,
        offered: true,
        listed: true,
        src: "/images/NFT1.png",
    },
];

const page = () => {
    return (
        <div className='bg-[#13142a]  lg:flex-row flex-col p-4 rounded-2xl'>

            <div>All Listings</div>

            <div className="flex flex-wrap space-y-2 md:*:my-2 space-x-3">
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

    )
}

export default page
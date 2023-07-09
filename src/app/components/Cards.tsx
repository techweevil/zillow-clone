import Image from "next/image";
import React from "react";

type CardData = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

const theThreeCardDatas: Array<CardData> = [
  {
    img: "/Buy_a_home.png",
    title: "Buy a home",
    description:
      "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
    buttonText: "Browse homes",
  },
  {
    img: "/Sell_a_home.png",
    title: "Sell a home",
    description:
      "No matter what path you take to sell your home, we can help you navigate a successful sale.",
    buttonText: "See your options",
  },
  {
    img: "/Rent_a_home.png",
    title: "Rent a home",
    description:
      "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
    buttonText: "Find rentals",
  },
];

function Card({ img, title, description, buttonText }: CardData) {
  return (
    <div className="group bg-white rounded-md px-[10px] py-[20px] shadow-sm flex flex-col items-center text-center shadow-slate-500 pb-[4em] pt-[2em]  transition-all duration-300 transform hover:scale-105">
      <Image
        src={img}
        height={300}
        width={300}
        objectFit="contain"
        alt={description}
      />
      <div className="mt-5">
        <p className="text-lg font-semibold font-serif text-[24px] my-4">
          {title}
        </p>
        <p className="text-[14px] ">{description}</p>
      </div>
      <button className="bg-[#f5f5f5] text-[#007aff] font-semibold text-[14px] px-4 py-2 rounded-md mt-5 hover:bg-[#e5e5e5] group-hover:bg-[#007aff] group-hover:text-white border-[#007aff] border">
        {buttonText}
      </button>
    </div>
  );
}

const Cards = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div
        className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1
       lg:w-[65%] gap-4 md:w-[80%] w-[90%] p-4
      "
      >
        {theThreeCardDatas.map((cardData) => (
          <Card
            img={cardData.img}
            title={cardData.title}
            description={cardData.description}
            buttonText={cardData.buttonText}
          />
        ))}
      </div>{" "}
    </div>
  );
};

export default Cards;

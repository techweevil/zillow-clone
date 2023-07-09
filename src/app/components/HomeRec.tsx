import Image from "next/image";
import React from "react";

const HomeRec = () => {
  return (
    <div className=" py-6 mt-[3em] flex items-center justify-center">
      <div className="flex lg:flex-row flex-col  items-center justify-center gap-10 lg:w-[60%]">
        <div className="text[#2a2a33] flex flex-col items-center justify-center gap-2 text-center">
          <p className=" text-[20px] font-bold">Get home recommendations</p>
          <p className="text-[16px]">
            Sign in for a more personalized experience.
          </p>
          <button className="border-[#006aff] border-2 text-[#006aff] px-[10px] py-[4px] rounded-sm">
            <p>Sign in</p>
          </button>
        </div>
        <div className="overflow-hidden w-[60%] bg-black">
          <img
            src="/home_cards.png"
            alt="Home Recommendations"
            className="w-[50em] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeRec;

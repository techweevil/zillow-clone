"use client";
import React from "react";
import classes from "./showcase.module.css";
import { BsSearch } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

const Showcase = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="h-full">
      <div className={`${classes.container} `}>
        <div>
          {" "}
          <h1 className="lg:text-[35px] md:text-[25px] text-[20px]   font-bold text-white shadow-md font-serif ">
            Agents. Tours. Loans. Homes.
          </h1>
        </div>
        <div className="lg:w-[35%] md:w-[50%] w-[80%] relative">
          <div
            className="
        flex items-center justify-between
          bg-white rounded-md  px-4 hover:shadow-lg transition-shadow duration-300 shadow-blue-600

        "
          >
            <input
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              type="search"
              placeholder="enter an address neighborhood or city"
              className="
            bg-transparent border-none outline-none first-letter:capitalize py-[18px] placeholder-gray-500 
            w-full"
            />
            <BsSearch size={20} color="#544949" />
          </div>
          {isHovered && (
            <div
              className="
               absolute top-[59px] flex items-center justify-center w-full
            "
            >
              <div
                className="   
            flex  items-center gap-[14px]    w-[99%]  
            bg-white  shadow-md px-4 py-4 hover:bg-[#006aff] 0 group text-[14px] -z-2 hover:text-white transition-colors duration-300 text-[#006aff] 
            "
              >
                <TfiLocationPin size={20} />
                <p>Current Location</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;

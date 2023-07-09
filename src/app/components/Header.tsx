"use client";
import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";

const navList = [
  {
    label: "Buy",
    href: "#",
    variant: "bold",
  },
  {
    label: "Rent",
    href: "#",
    variant: "bold",
  },
  {
    label: "Sell",
    href: "#",
    variant: "bold",
  },
  {
    label: "Home Loans",
    href: "#",
    variant: "bold",
  },
  {
    label: "Agent Finder",
    href: "#",
    variant: "bold",
  },
  {
    label: "Manage Rentals",
    variant: "bold",
    href: "#",
  },
  {
    label: "Advertise",
    href: "#",
    variant: "bold",
  },
  {
    label: "Help",
    href: "#",
    variant: "light",
  },
  {
    label: "Sign in",
    href: "#",
    variant: "light",
  },
];

const Header = () => {
  const NavButton = ({
    children,
    href,
    variant = "bold",
  }: {
    children: string;
    href: string;
    variant?: string;
  }) => {
    return (
      <a
        href={href}
        className={`text-gray-700 text-sm mr-4 hover:text-gray-900 transition-colors duration-300 ${
          variant === "bold" ? "font-[400]" : "font-light"
        }`}
      >
        {children}
      </a>
    );
  };

  const _NavButton = ({
    children,
    href,
    variant = "bold",
  }: {
    children: string;
    href: string;
    variant?: string;
  }) => {
    return (
      <button
        className="
          border-gray-300 py-[10px] border-b-2 px-[10px] font-[400] text-gray-700 text-sm mr-4 hover:text-gray-900 transition-colors duration-300
          flex items-center justify-between group
        "
      >
        <a href={href} className={`text-gray-700 group-hover:text-[#006aff] `}>
          {children}
        </a>
        {variant === "bold" && (
          <span
            className=" border-l-2 border-gray-300 pl-2
        "
          >
            <FaChevronDown size={18} color="#006aff" />
          </span>
        )}
      </button>
    );
  };

  const half = Math.ceil(navList.length / 2);

  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <header className="  static ">
      <div className="lg:bg-white py-4 bg-transparent  lg:border-b-2 lg:border-gray-300 border-none absolute w-full ">
        <div className="flex items-center w-full lg:justify-center justify-between gap-4 lg:gap-[10em]  ">
          <button
            onClick={() => setShowNavMenu(!showNavMenu)}
            className="lg:hidden text-white text-sm mr-4 hover:text-[#006aff] transition-colors duration-300 ml-10"
          >
            <HiOutlineBars3 size={20} className="font-bold" />
          </button>
          <nav className="hidden lg:flex">
            {navList.slice(0, half).map((navItem) => {
              return (
                <NavButton href={navItem.href} variant={navItem.variant}>
                  {navItem.label}
                </NavButton>
              );
            })}
          </nav>

          <Image src={"/logo.svg"} alt="logo" width={100} height={50} />

          <div
            className="lg:hidden cursor-pointer
        "
          >
            <a
              href={"#"}
              className={`text-white text-sm mr-4 hover:text-[#006aff] transition-colors duration-300 `}
            >
              Sign in
            </a>
          </div>

          <nav className="hidden lg:flex">
            {navList.slice(half, navList.length).map((navItem) => {
              return (
                <NavButton href={navItem.href} variant={navItem.variant}>
                  {navItem.label}
                </NavButton>
              );
            })}
          </nav>
        </div>
        <div
          className={`lg:hidden ${
            showNavMenu && "h-screen bg-white absolute top-0 w-full z-10 "
          } `}
        >
          <Transition
            show={showNavMenu}
            enter="transition duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <>
                {" "}
                <div className="lg:hdden flex items-center w-full justify-between gap-4 lg:gap-[10em]  border-gray-300 border-b-2 py-[10px] px-[10px] pb-[15px]">
                  <button
                    onClick={() => setShowNavMenu(!showNavMenu)}
                    className=" text-gray-700 text-sm mr-4 hover:text-[#006aff] transition-colors duration-300   font-[400] text-left"
                  >
                    <GrClose size={18} color="#006aff" />
                  </button>
                  <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
                  <div />
                </div>
                <div ref={ref} className="origin-top-left     ">
                  <div className="overflow-hidden s  ring-1 ring-black ring-opacity-5">
                    <div
                      className="flex flex-col "
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {navList.map((navItem) => (
                        <_NavButton
                          href={navItem.href}
                          variant={navItem.variant}
                          key={navItem.label}
                        >
                          {navItem.label}
                        </_NavButton>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Transition>
        </div>
      </div>
    </header>
  );
};

export default Header;

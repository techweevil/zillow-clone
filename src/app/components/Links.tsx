import { link } from "fs";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
const quickLinks = [
  "About",
  "Zestimates",
  "Research",
  "Careers",
  "Help",
  "Advertise",
  "Fair Housing Guide",
  "Terms of use",
  "Privacy Portal",
  "Cookie Preference",
  "Blog",
  "AI",
  "Mobile Apps",
  "Trulia",
  "StreetEasy",
  "HotPads",
  "Out East",
  "ShowingTime+",
];

const LinkwithChevron = ({ text, index }: { text: string; index: number }) => {
  return (
    <div
      className={`flex items-center justify-center gap-x-6 flex-1 group cursor-pointer ${
        index === 4
          ? "lg:border-none border-r  border-gray-500 "
          : "border-r  border-gray-500 "
      }`}
    >
      <p className="text-[14px] group-hover:underline">{text}</p>
      <FaChevronDown className="text-[#007aff] text-[14px] ml-2" />
    </div>
  );
};

const Links = () => {
  return (
    <div className="mt-[5em] flex flex-col items-center justify-center">
      <div className="lg:w-[65%] md:w-[80%] w-[90%]  ">
        <div className=" grid md:grid-cols-4 grid-cols-2 gap-y-4">
          <LinkwithChevron text="Buy" index={1} />
          <LinkwithChevron text="Rent" index={2} />
          <LinkwithChevron text="Sell" index={3} />
          <LinkwithChevron text="Mortgages" index={4} />
        </div>

        <div className=" border-t border-gray-400 mt-[2.5em] py-[1em]  border-b px-[5em]">
          <div className="flex flex-wrap gap-4 items-center justify-center ">
            {quickLinks.map((link) => (
              <p className="hover:underline text-[12px] leading-tight">
                {link}
              </p>
            ))}
          </div>

          <p className="text-[#007aff] text-center text-[12px] mt-[2em]">
            Do Not Sell or Share My Personal Information →
          </p>
        </div>

        <div className="mt-[2em] text-center text-[8px] ">
          <p className="">
            Zillow Group is committed to ensuring digital accessibility for
            individuals with disabilities. We are continuously working to
            improve the accessibility of our <br /> web experience for everyone,
            and we welcome feedback and accommodation requests. If you wish to
            report an issue or seek an accommodation, please
          </p>
          <p className="underline text-purple-700">let us know</p>

          <p className="mt-[1em]">
            Zillow, Inc. holds real estate brokerage{" "}
            <span className="underline text-blue-700">licenses</span> in
            multiple states. Zillow (Canada), Inc. holds real estate brokerage
            <span className="underline text-blue-700">licenses</span> in
            multiple provinces.
            <br />
            <span className="underline text-blue-700">
              {" "}
              § 442-H New York Standard Operating Procedures
            </span>{" "}
            <br />{" "}
            <span className="underline text-blue-700">
              {" "}
              § New York Fair Housing Notice
            </span>{" "}
            <br /> TREC:{" "}
            <span className="underline text-blue-700">
              {" "}
              Information about brokerage services, Consumer protection notice
            </span>{" "}
            <br />
            California DRE #1522444
          </p>
          <p className="underline text-blue-700 text-[10px] my-[1em]">
            Contact Zillow, Inc. Brokerage
          </p>
          <p>
            For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
            REALTOR® logo are controlled by The Canadian Real Estate Association
            (CREA) and <br /> identify real estate professionals who are members
            of CREA. The trademarks MLS®, Multiple Listing Service® and the
            associated logos are owned by CREA <br /> and identify the quality
            of services provided by real estate professionals who are members of
            CREA. Used under license.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;

import React from "react";
import Image from "next/image";
import clasess from "./footer.module.css";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center mt-[2em]">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/app-store-badge.svg"
            height={100}
            width={100}
            objectFit="contain"
            alt="footer"
          />{" "}
          <Image
            src="/google-play-badge.svg"
            height={100}
            width={100}
            objectFit="contain"
            alt="footer"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-6">
          {" "}
          <Image
            src="/logo.svg"
            height={50}
            width={100}
            objectFit="contain"
            alt="footer"
          />
          <Image
            src="/socials.png"
            height={300}
            width={300}
            objectFit="contain"
            alt="footer"
          />
        </div>

        <div className="mt-[2em]">
          <Image
            src="/footer-art.svg"
            height={300}
            width={800}
            objectFit="contain"
            alt="footer"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;

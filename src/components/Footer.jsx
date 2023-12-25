import React from "react";
import logo from "../assets/logo1.png";

const Footer = () => {
  const copyright = String.fromCodePoint(0x00a9);

  return (
    <div>
      <div className=" bg-gradient-to-r from-red-400 to-red-800 justify-center items-center">
        <p className="py-1 font-poppins italic font-semibold text-center text-white text-xs sm:text-sm">
          {`Created by `}
          <span className="text-yellow-300 hover:text-blue-600 ">
            <a href="https://abudzaralghifari.vercel.app/" target="_blank">
              Abu Dzar Al Ghifari (2023)
            </a>
          </span>
        </p>
        <p className="py-1 font-poppins italic font-semibold text-center text-white text-xs sm:text-sm">
          Powered by{" "}
          <span className="text-yellow-300 hover:text-blue-600">
            <a href="https://jikan.moe/showcase" target="_blank">
              Jikan API V4
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

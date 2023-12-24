import React from "react";
import logo from "../assets/logo1.png";

const Footer = () => {
  const copyright = String.fromCodePoint(0x00a9);

  return (
    <div>
      <div className="gap-2 bg-gradient-to-r from-red-400 to-red-800 flex justify-center items-center">
        <img
          className="flex justify-center items-center h-9 mt-3 pb-2"
          src={logo}
          alt="logo abnime"
        />
        <h1 className="py-1 font-poppins italic font-semibold text-center text-white text-xs sm:text-sm">{`Copyright ${copyright} 2023`}</h1>
      </div>
    </div>
  );
};

export default Footer;

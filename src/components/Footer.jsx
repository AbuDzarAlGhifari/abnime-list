import React from "react";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <div>
      <div className="gap-2 bg-gradient-to-r from-gray-400 to-red-700 flex justify-center items-center">
        <img
          className="flex justify-center items-center h-9 mt-3 pb-2"
          src={logo}
          alt="logo abnime"
        />
        <h1 className="text-white font-bold">Copyright 2023</h1>
      </div>
    </div>
  );
};

export default Footer;

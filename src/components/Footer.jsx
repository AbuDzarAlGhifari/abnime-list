import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="gap-2 bg-gradient-to-r from-gray-400 to-red-700 flex justify-center items-center">
        <img
          className="flex justify-center items-center h-9 mt-3 pb-2"
          src="/src/assets/logo.png"
          alt="logo abnime"
        />
        <h1 className="text-white font-bold">Copyright 2023</h1>
      </div>
    </div>
  );
};

export default Footer;

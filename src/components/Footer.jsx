import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-400 to-red-700 flex justify-center items-center">
        <img
          className="flex justify-center items-center h-9 mt-3 pb-2"
          src="/src/assets/logo.png"
        />
        <h3 className="text-white font-bold">Copyright 2023 Abnime,</h3>
      </div>
    </div>
  );
};

export default Footer;

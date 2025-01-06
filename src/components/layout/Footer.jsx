import React from 'react';

const Footer = () => {
  // const copyright = String.fromCodePoint(0x00a9);

  return (
    <div>
      <div className="items-center justify-center bg-gradient-to-r from-red-400 to-red-800">
        <p className="py-1 text-xs italic font-semibold text-center text-white font-poppins sm:text-sm">
          {`Created by `}
          <span className="text-yellow-300 hover:text-blue-600 ">
            <a href="https://abudzaralghifari.vercel.app/" target="_blank">
              Abu Dzar Al Ghifari (2023)
            </a>
          </span>
        </p>
        <p className="py-1 text-xs italic font-semibold text-center text-white font-poppins sm:text-sm">
          Powered by{' '}
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

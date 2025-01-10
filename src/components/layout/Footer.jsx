// import React from 'react';

// const Footer = () => {
//   return (
//     <div>
//       <div className="items-center justify-center bg-gradient-to-r from-red-400 to-red-800">
//         <p className="py-1 text-xs italic font-semibold text-center text-white font-poppins sm:text-sm">
//           {`Created by `}
//           <span className="text-yellow-300 hover:text-blue-600 ">
//             <a href="https://abudzaralghifari.vercel.app/" target="_blank">
//               Abu Dzar Al Ghifari (2023)
//             </a>
//           </span>
//         </p>
//         <p className="py-1 text-xs italic font-semibold text-center text-white font-poppins sm:text-sm">
//           Powered by{' '}
//           <span className="text-yellow-300 hover:text-blue-600">
//             <a href="https://jikan.moe/showcase" target="_blank">
//               Jikan API V4
//             </a>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-6 mt-8 border-t border-red-700 bg-red-950">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Links Section */}
        <div className="flex gap-4 text-sm text-red-700">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>

        <p className="mt-4 text-sm text-red-700 md:mt-0">
          {new Date().getFullYear()} AbNime. All Rights Reserved.
        </p>

        <p className="text-sm text-red-700">
          Anime data provided by{' '}
          <a
            href="https://jikan.moe"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-400"
          >
            Jikan API
          </a>
          .
        </p>

        <div className="flex gap-4 mt-4 text-red-700 md:mt-0">
          <a href="#" className="hover:text-blue-600">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-sky-500">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

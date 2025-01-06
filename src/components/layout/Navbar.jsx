import React, { useState } from 'react';
import hamburger from '../../assets/hamburger.svg';
import hamburger_active from '../../assets/hamburger-active.svg';
import logo from '../../assets/logo1.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-gradient-to-r from-red-400 to-red-800">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto lg:px-10">
        {/* ICON */}
        <div className="flex items-center justify-center order-1 cursor-pointer sm:order-2 lg:order-1">
          <img
            onClick={() => navigate('/')}
            className="cursor-pointer h-9"
            src={logo}
            alt="abnime logo"
          />
          <div className="hidden sm:block">
            <ul className="flex items-center justify-center gap-1 pl-6 text-white ">
              <li
                className="px-2 font-extrabold text-red-700 rounded-md cursor-pointer font-poppins hover:text-blue-400 hover:bg-white"
                onClick={() => navigate('/')}
              >
                Home
              </li>
              <li
                className="px-2 font-extrabold text-red-700 rounded-md cursor-pointer font-poppins hover:text-blue-400 hover:bg-white"
                onClick={() => navigate('/seiyu')}
              >
                People
              </li>
            </ul>
          </div>
        </div>
        {/* MENU */}
        <div
          className="flex items-center justify-center order-2 md:hidden lg:hidden"
          onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
        >
          <img
            className="w-10 h-10 cursor-pointer"
            src={toggleNavbar ? hamburger_active : hamburger}
            alt="hamburger"
          />
        </div>

        {/* SEARCH */}
        <div className="order-3 hidden sm:block">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?query=${searchQuery}`);
            }}
            className="relative"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anime..."
              className="relative z-10 w-full pl-3 pr-3 my-1 bg-transparent bg-white border border-transparent rounded-lg outline-none cursor-pointer h-7 focus:cursor-text"
            />
          </form>
        </div>
      </div>
      {/* DROP MENU */}
      <div className={`${toggleNavbar ? 'block' : 'hidden'} lg:hidden`}>
        <ul className="flex flex-col gap-1 text-xs font-extrabold text-red-700 font-poppins sm:text-lg bg ">
          <li
            className="px-4 cursor-pointer hover:text-blue-500 hover:bg-red-900"
            onClick={() =>
              `${navigate('/')}, ${setToggleNavbar(
                toggleNavbar ? false : true
              )}`
            }
          >
            Home
          </li>
          <li
            className="px-4 cursor-pointer hover:text-blue-500 hover:bg-red-900"
            onClick={() =>
              `${navigate('/seiyu')}, ${setToggleNavbar(
                toggleNavbar ? false : true
              )}`
            }
          >
            People
          </li>
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search?query=${searchQuery}`);
          }}
          className="pt-1 pb-2 mx-4"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search anime..."
            className="relative z-10 w-full h-6 pl-2 pr-2 bg-transparent bg-white border border-transparent rounded-md outline-none cursor-pointer focus:cursor-text"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

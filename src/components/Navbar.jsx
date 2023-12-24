import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import hamburger_active from "../assets/hamburger-active.svg";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-gradient-to-r from-red-400 to-red-800">
      <div className="flex container mx-auto px-4 py-2 justify-between items-center lg:px-10">
        {/* ICON */}
        <div className="flex cursor-pointer items-center justify-center order-1 sm:order-2 lg:order-1">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer h-9"
            src={logo}
            alt="abnime logo"
          />
          <div className=" hidden sm:block">
            <ul className="flex justify-center items-center gap-1 pl-6 text-white ">
              <li
                className="cursor-pointer font-poppins font-extrabold rounded-md text-red-700 hover:text-blue-400 hover:bg-white px-2"
                onClick={() => navigate("/")}>
                Home
              </li>
              <li
                className="cursor-pointer font-poppins font-extrabold rounded-md text-red-700 hover:text-blue-400 hover:bg-white px-2"
                onClick={() => navigate("/seiyu")}>
                People
              </li>
            </ul>
          </div>
        </div>
        {/* MENU */}
        <div
          className="flex justify-center items-center order-2 md:hidden lg:hidden"
          onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
          <img
            className="h-10 w-10 cursor-pointer"
            src={toggleNavbar ? hamburger_active : hamburger}
            alt="hamburger"
          />
        </div>

        {/* SEARCH */}
        <div className="hidden sm:block order-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?query=${searchQuery}`);
            }}
            className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anime..."
              className="cursor-pointer my-1 bg-white relative z-10 h-7 pl-3 pr-3 rounded-lg border bg-transparent 
              outline-none border-transparent w-full focus:cursor-text"
            />
          </form>
        </div>
      </div>
      {/* DROP MENU */}
      <div className={`${toggleNavbar ? "block" : "hidden"} lg:hidden`}>
        <ul className="flex flex-col gap-1 font-poppins font-extrabold text-red-700 text-xs sm:text-lg bg ">
          <li
            className="cursor-pointer px-4 hover:text-blue-500 hover:bg-red-900"
            onClick={() =>
              `${navigate("/")}, ${setToggleNavbar(
                toggleNavbar ? false : true
              )}`
            }>
            Home
          </li>
          <li
            className="cursor-pointer px-4 hover:text-blue-500 hover:bg-red-900"
            onClick={() =>
              `${navigate("/seiyu")}, ${setToggleNavbar(
                toggleNavbar ? false : true
              )}`
            }>
            People
          </li>
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search?query=${searchQuery}`);
          }}
          className="mx-4 pb-2 pt-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search anime..."
            className="cursor-pointer bg-white relative z-10 h-6 pl-2 pr-2 rounded-md border bg-transparent 
              outline-none border-transparent w-full focus:cursor-text"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

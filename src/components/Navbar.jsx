import React, { useState, useRef } from "react";
import hamburger from "../assets/hamburger.svg";
import hamburger_active from "../assets/hamburger-active.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //state
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = async (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;
    if (event.key === "Enter" || event.type === "click") {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${query}`
        );
        setSearchResults(response.data.data);
        navigate(`/search/${query}`, { state: { searchResults } });
        console.log(searchResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-400 to-red-700">
      <div className="flex container mx-auto px-4 py-2 justify-between items-center lg:px-10">
        {/* ICON */}
        <div
          className="order-1 sm:order-2 lg:order-1"
          onClick={() => navigate("/")}>
          <img className="cursor-pointer h-9" src="/src/assets/logo.png" />
        </div>
        {/* MENU */}
        <div
          className="order-2 sm:order-1 lg:hidden"
          onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
          <img
            className="h-10 w-10 cursor-pointer"
            src={toggleNavbar ? hamburger_active : hamburger}
            alt="hamburger"
          />
        </div>

        <div className="hidden lg:block lg:order-2">
          <ul className="flex items-center gap-1 bg-red-700 border-2 border-gray-400 rounded-full text-white">
            <li
              className="cursor-pointer rounded-full hover:text-red-700 hover:bg-gray-400 px-4 hover:font-bold"
              onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className="cursor-pointer rounded-full hover:text-red-700 hover:bg-gray-400 px-4 hover:font-bold"
              onClick={() => navigate("/seiyu")}>
              People
            </li>
            <li
              className="cursor-pointer rounded-full hover:text-red-700 hover:bg-gray-400 px-4 hover:font-bold"
              onClick={() => navigate("/about")}>
              About
            </li>
          </ul>
        </div>
        {/* SEARCH */}
        <div className="hidden sm:block order-3">
          <input
            className="cursor-pointer rounded-l-lg border-gray-400 border-2 pl-2 pr-2 border-transparent"
            value={query}
            ref={searchRef}
            onKeyDown={handleSearch}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className=" border-gray-400 border-y-2 border-r-2 rounded-r-lg text-justify bg-red-700 text-white hover:bg-slate-400 hover:text-black hover:border-black"
            onClick={(e) => handleSearch(e)}>
            Search
          </button>
        </div>
      </div>
      {/* DROP MENU */}
      <div className={`${toggleNavbar ? "block" : "hidden"} lg:hidden`}>
        <ul className="flex flex-col gap-1 font-kenia text-sm sm:text-lg bg-gradient-to-r from-red-700 to-gray-400">
          <li
            className="cursor-pointer border-red-700 border-y-2 bg-gray-400 hover:text-white hover:bg-red-700 hover:border-gray-400 px-4"
            onClick={() =>
              `${navigate("/")}, ${setToggleNavbar(
                toggleNavbar ? false : true
              )}`
            }>
            Home
          </li>
          <li
            className="cursor-pointer border-red-700 border-y-2 bg-gray-400 hover:text-white hover:bg-red-700 hover:border-gray-400 px-4"
            onClick={() =>
              `${navigate("/seiyu")}, ${setToggleNavbar(
                toggleNavbar ? false : true
              )}`
            }>
            People
          </li>
          <li
            className="cursor-pointer border-red-700 border-y-2 bg-gray-400 hover:text-white hover:bg-red-700 hover:border-gray-400 px-4"
            onClick={() =>
              `${navigate("/about")}, ${setToggleNavbar(
                toggleNavbar ? false : true
              )}`
            }>
            About
          </li>
          <li className="sm:hidden lg:hidden ">
            <input
              className="cursor-pointer rounded-l-lg ml-2 mb-2 border-gray-400 border-2 pl-2 pr-2 border-transparent"
              value={query}
              ref={searchRef}
              onKeyDown={handleSearch}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className=" border-gray-400 border-y-2 border-r-2 rounded-r-lg text-justify bg-red-700 text-white hover:bg-slate-400 hover:text-black hover:border-black"
              onClick={(e) => handleSearch(e)}>
              Search
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

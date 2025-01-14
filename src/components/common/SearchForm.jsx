import React from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchForm = ({ searchQuery, setSearchQuery, navigate, isDesktop }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      navigate(`/search?query=${searchQuery}`);
    }}
    className={`${isDesktop ? '' : 'w-full px-4 pb-4'}`}
  >
    <label className="relative block text-white">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Anime"
        className={`${
          isDesktop
            ? 'px-5 pr-10 text-sm bg-transparent border-2 sm:rounded-full rounded-md sm:h-9 peer'
            : 'w-full px-4 py-2 text-sm bg-transparent border-2 rounded-lg'
        } focus:outline-none focus:border-red-600`}
      />
      <button
        type="submit"
        className={`absolute ${
          isDesktop
            ? 'sm:-top-0.5 -top-2 right-0 mt-3 mr-2 sm:mr-4 text-white peer-focus:text-red-600'
            : 'text-gray-400 transform -translate-y-1/2 top-1/2 sm:right-3 hover:text-red-600'
        }`}
      >
        <IoSearch />
      </button>
    </label>
  </form>
);

export default SearchForm;

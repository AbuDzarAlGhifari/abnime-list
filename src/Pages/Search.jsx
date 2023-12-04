import React from "react";
import { Link, useLocation } from "react-router-dom";

const Search = () => {

  const location = useLocation();
  const searchResults = location.state.searchResults || [];

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 bg-gradient-to-r from-red-700 to-gray-400 min-h-screen">
        {searchResults?.map((anime) => {
          const { title, images, mal_id } = anime;
          return (
            <Link
              to={`/anime/${mal_id}`}
              className="cursor-pointer bg-black border rounded-lg m-3 font-kenia text-white hover:text-black hover:bg-gray-400 p-0.5 hover:p-0 transition-all">
              <div className="justify-center items-center">
                <img
                  className="rounded-t-lg w-full h-20 sm:h-40 lg:h-72 "
                  src={images.jpg.image_url}
                />
                <h1 className="cursor-pointer text-center">{title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Search;

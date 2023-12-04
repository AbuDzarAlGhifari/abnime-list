import React from "react";
import { Link } from "react-router-dom";

const Card = ({ all, index }) => {
  return (
    <Link
      to={`/anime/${all.mal_id}`}
      className="cursor-pointer bg-black border font-semibold rounded-lg m-3 text-white text-xs sm:text-sm lg:text-lg hover:text-black hover:bg-gray-400 p-0.5 hover:p-0 transition-all"
      key={index}>
      <div className="justify-center items-center">
        <img
          className="rounded-t-lg w-full h-20 sm:h-40 lg:h-72 "
          src={all.images.jpg.image_url}
        />
        <h1 className="cursor-pointer text-center">{all.title}</h1>
      </div>
    </Link>
  );
};

export default Card;

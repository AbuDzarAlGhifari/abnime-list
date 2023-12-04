import React from "react";
import { Link } from "react-router-dom";

const CardSeiyu = ({ all }) => {
  return (
    <Link
      to={`/seiyu/${all.mal_id}`}
      className="cursor-pointer bg-black border rounded-lg m-3 font-semibold text-white text-xs sm:text-sm lg:text-lg hover:text-black hover:bg-gray-400">
      <div className="flex justify-center items-center p-0.5 hover:p-0">
        <img
          className="rounded-t-lg w-full h-20 sm:h-40 lg:h-72"
          src={all.images.jpg.image_url}
          alt="top anime"
        />
      </div>
      <h1 className="cursor-pointer text-center">{all.name}</h1>
    </Link>
  );
};

export default CardSeiyu;

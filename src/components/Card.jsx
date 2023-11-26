import React from "react";
import { Link } from "react-router-dom";

const Card = ({ all }) => {
  return (
    <Link
      to={`/anime/${all.mal_id}`}
      className="cursor-pointer bg-black border rounded-lg m-3 font-kenia text-white hover:text-black hover:bg-gray-400">
      <div className="flex justify-center items-center p-0.5 hover:p-0">
        <img
          className="rounded-t-lg w-full h-20 sm:h-40 lg:h-72 "
          src={all.images.jpg.image_url}
          alt="top anime"
        />
      </div>
      <h1 className="cursor-pointer text-center">{all.title}</h1>
    </Link>
  );
};

export default Card;

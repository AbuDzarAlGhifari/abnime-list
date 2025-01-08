import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ all, index }) => {
  return (
    <Link
      to={`/anime/${all.mal_id}`}
      className="cursor-pointer font-poppins font-bold rounded-lg m-2 text-xs sm:text-sm lg:text-lg p-0.5 hover:p-0 text-white  transition-all"
      key={index}
    >
      <div className="items-center justify-center">
        <img
          className="w-full rounded-t-lg h-36 sm:h-64 lg:h-72"
          src={all.images.webp.image_url}
          alt={all.title}
        />
        <h1 className="cursor-pointer rounded-b-lg text-center px-1 sm:px-2 lg:px-3 py-1 sm:py- lg:py-4  text-[10.5px] sm:text-sm lg:text-lg bg-red-800 bg-opacity-80 truncate">
          {all.title}
        </h1>
      </div>
    </Link>
  );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ all, index }) => {
  return (
    <Link
      to={`/detail-anime/${all.mal_id}`}
      className="cursor-pointer font-poppins font-bold rounded-lg m-2 text-xs sm:text-sm lg:text-lg p-0.5 hover:p-0 text-white hover:text-blue-500 transition-all"
      key={index}
    >
      <div className="absolute bg-black bg-opacity-50 text-white text-[10px] sm:text-sm lg:text-lg rounded-lg pr-2">
        ⭐{all.score}
      </div>
      <div className="items-center justify-center">
        <img
          className="w-full rounded-t-lg h-36 sm:h-64 lg:h-72"
          src={all.images.jpg.image_url}
          alt={all.images.webp.image_url}
        />
        <h1 className="cursor-pointer rounded-b-lg text-center px-1 sm:px-2 lg:px-3 py-1 sm:py- lg:py-4 text-[10.5px] sm:text-sm lg:text-lg bg-red-950 bg-opacity-80 truncate">
          {all.title}
        </h1>
      </div>
    </Link>
  );
};

export default Card;

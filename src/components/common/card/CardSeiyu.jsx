import React from 'react';
import { Link } from 'react-router-dom';

const CardSeiyu = ({ all }) => {
  return (
    <Link
      to={`/seiyu/${all.mal_id}`}
      className="cursor-pointer font-poppins font-bold rounded-lg m-2 text-xs sm:text-sm lg:text-lg p-0.5 hover:p-0 text-yellow-300 hover:text-blue-500 transition-all"
    >
      <div className="items-center justify-center">
        <img
          className="w-full rounded-t-lg h-36 sm:h-52 lg:h-72"
          src={all.images.jpg.image_url}
          alt={all.name}
        />
      </div>
      <h1 className="cursor-pointer rounded-b-lg text-center px-1 py-1 text-[10.5px] sm:text-sm lg:text-lg bg-black bg-opacity-50 truncate">
        {all.name}
      </h1>
    </Link>
  );
};

export default CardSeiyu;

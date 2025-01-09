import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { getFormattedRating } from '@/helper';

const CardSeason = ({ all }) => {
  return (
    <motion.div
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="relative mx-1 overflow-hidden font-bold text-white rounded-md cursor-pointer font-poppins group"
    >
      <Link to={`/anime/${all.mal_id}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-48 overflow-hidden rounded-lg sm:h-56 md:h-64 lg:h-72"
        >
          <div className="absolute w-full h-full">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={all.images.webp.image_url}
              alt={all.title}
            />
            <div className="absolute inset-0 bg-black rounded-lg bg-opacity-10"></div>
            <div className="absolute px-2 py-1 text-[10px] font-semibold text-orange-200 bg-black rounded-md shadow-md bg-opacity-50 top-2 left-2 sm:text-xs">
              <span className="flex items-center gap-1">
                <FaStar /> {all.score}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/70 to-transparent">
              <h1 className="text-sm font-semibold truncate sm:text-base">
                {all.title}
              </h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute flex flex-col justify-center w-full h-full p-4 bg-black bg-opacity-75 rounded-lg backdrop-blur-md"
          >
            <div className="flex flex-col space-y-1 text-[9px] sm:text-xs text-gray-300">
              <h2 className="mb-2 text-xs font-bold text-center sm:text-sm">
                {all.title}
              </h2>
              <p>
                <strong>Score: </strong>
                {all.score || 'N/A'}
              </p>
              <p>
                <strong>Rating: </strong>
                {getFormattedRating(all.rating)}
              </p>
              <p>
                <strong>Episodes: </strong>
                {all.episodes || 'N/A'}
              </p>
              <hr />
              <p>
                <strong>Genres: </strong>
                {all.genres?.map((genre) => genre.name).join(', ') || 'N/A'}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CardSeason;

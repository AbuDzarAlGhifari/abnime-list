import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ all }) => {
  return (
    <motion.div
      className="relative mx-2 my-4 overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg group bg-gradient-to-t from-red-800 via-red-950 to-black hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to={`/detail-anime/${all.mal_id}`}>
        <div className="absolute px-2 py-1 text-xs text-white bg-black rounded-full shadow-md top-2 left-2 bg-opacity-70 sm:text-sm">
          ⭐ {all.score || 'N/A'}
        </div>

        <motion.img
          className="object-cover w-full h-40 transition-transform duration-300 rounded-t-lg sm:h-56 lg:h-72 group-hover:scale-110"
          src={all.images.jpg.image_url}
          alt={all.title}
          whileHover={{ scale: 1.1 }}
        />

        <div className="absolute inset-x-0 bottom-0 px-3 py-2 text-center text-white truncate bg-black bg-opacity-60">
          <h1 className="text-xs font-semibold truncate sm:text-sm lg:text-lg">
            {all.title}
          </h1>
        </div>

        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-70">
          <p className="text-sm font-medium text-white opacity-0 sm:text-base lg:text-lg group-hover:opacity-100">
            Click for Details
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;

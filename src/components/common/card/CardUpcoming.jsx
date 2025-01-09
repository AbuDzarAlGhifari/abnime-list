import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CardUpcoming = ({ all, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/anime/${all.mal_id}`}
        className="relative block overflow-hidden transition-transform transform scale-95 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl group"
      >
        <div className="relative">
          <img
            className="object-cover w-full transition-transform transform rounded-t-lg h-36 sm:h-64 lg:h-72 group-hover:scale-110"
            src={all.images.jpg.image_url}
            alt={all.title}
          />
          <div className="absolute inset-0 transform bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 group-hover:scale-110"></div>
        </div>

        <div className="p-3 text-center bg-red-700 rounded-b-lg bg-opacity-80">
          <h1 className="text-sm font-bold text-white truncate sm:text-base lg:text-lg group-hover:text-yellow-400">
            {all.title}
          </h1>
        </div>

        {all.type && (
          <div className="absolute px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-lg shadow-md top-2 left-2">
            {all.type}
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default CardUpcoming;

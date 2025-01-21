import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CardUpcoming = ({ all, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
      className="relative block overflow-hidden transition-transform transform rounded-lg shadow-lg hover:scale-105 group"
    >
      <Link to={`/detail-anime/${all.mal_id}`}>
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={all.images.jpg.image_url}
            alt={all.title}
            className="object-cover w-full h-40 transition-transform duration-300 ease-in-out transform sm:h-56 md:h-64 lg:h-72 group-hover:scale-110"
          />
          <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/5"></div>
        </div>

        <div className="p-3 bg-red-700 rounded-b-lg bg-opacity-90">
          <h1 className="text-xs font-semibold text-white truncate transition-colors duration-300 sm:text-base lg:text-lg group-hover:text-yellow-300">
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

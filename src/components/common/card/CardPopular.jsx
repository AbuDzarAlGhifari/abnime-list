import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardPopular = ({ all }) => {
  return (
    <motion.div
      whileHover={{ rotateX: 10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="relative mx-1 overflow-hidden font-bold text-white rounded-lg cursor-pointer font-poppins group"
    >
      <Link to={`/anime/${all.mal_id}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-48 overflow-hidden rounded-lg sm:h-64 lg:h-72"
        >
          <div className="absolute w-full h-full">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={all.images.webp.image_url}
              alt={all.title}
            />
            <div className="absolute inset-0 bg-black rounded-lg bg-opacity-10"></div>
            <div className="absolute px-2 py-1 text-xs font-semibold text-black bg-orange-600 rounded-md shadow-md bg-opacity-40 top-2 left-2 sm:text-sm lg:text-base">
              ⭐ {all.score}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/70 to-transparent">
              <h1 className="text-sm font-semibold truncate sm:text-base lg:text-lg">
                {all.title}
              </h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center justify-center w-full h-full p-4 text-center bg-black bg-opacity-75 rounded-lg backdrop-blur-md"
          >
            <div className="text-white">
              <h2 className="text-lg font-bold">{all.title}</h2>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CardPopular;

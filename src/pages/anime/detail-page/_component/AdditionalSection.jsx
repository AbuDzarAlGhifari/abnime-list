import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdditionalSection = ({ anime }) => {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="px-4 py-4 bg-gray-900 rounded-lg shadow-md sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={listVariants}
    >
      <motion.h2
        className="px-2 mb-4 text-lg font-bold text-white capitalize border-l-4 border-red-700 sm:text-xl"
        variants={itemVariants}
      >
        Additional Information
      </motion.h2>
      <motion.ul
        className="space-y-4 text-sm text-gray-300"
        variants={listVariants}
      >
        <motion.li variants={itemVariants}>
          <strong className="text-white">Background:</strong>{' '}
          <span className="italic">{anime.background || 'Not Available'}</span>
        </motion.li>
        <motion.li variants={itemVariants}>
          <strong className="text-white">Season:</strong>{' '}
          <span className="italic">
            {anime.season || 'Unknown'} {anime.year || 'Unknown'}
          </span>
        </motion.li>
        <motion.li variants={itemVariants}>
          <strong className="text-white">Genres:</strong>{' '}
          {anime.genres?.length > 0 ? (
            <span className="flex flex-wrap gap-1">
              {anime.genres.map((genre, index) => (
                <Link
                  key={genre.mal_id}
                  to={genre.url}
                  className="text-red-400 hover:underline"
                >
                  {genre.name}
                  {index < anime.genres.length - 1 && ','}
                </Link>
              ))}
            </span>
          ) : (
            <span className="italic">Unknown</span>
          )}
        </motion.li>
        <motion.li variants={itemVariants}>
          <strong className="text-white">Demographics:</strong>{' '}
          {anime.demographics?.length > 0 ? (
            <span className="flex flex-wrap gap-1">
              {anime.demographics.map((demo) => (
                <span
                  key={demo.mal_id}
                  className="text-red-400 hover:underline"
                >
                  {demo.name}
                </span>
              ))}
            </span>
          ) : (
            <span className="italic">Unknown</span>
          )}
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default AdditionalSection;

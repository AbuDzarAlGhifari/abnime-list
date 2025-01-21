import React from 'react';
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
      className="px-6 py-6 bg-gray-900 rounded-md shadow-lg sm:px-8 lg:px-12"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={listVariants}
    >
      <motion.h2
        className="px-2 mb-6 text-xl font-bold text-white capitalize border-l-4 border-red-700 sm:text-2xl"
        variants={itemVariants}
      >
        Additional Information
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <motion.ul
          className="space-y-6 text-sm text-gray-300"
          variants={listVariants}
        >
          <motion.li variants={itemVariants}>
            <strong className="block mb-2 text-white">Another Title:</strong>
            <ul className="pl-4 space-y-1 list-disc">
              <li>Japanese: {anime.title_japanese || 'N/A'}</li>
              <li>English: {anime.title_english || 'N/A'}</li>
              <li>Other: {anime.title_synonyms?.join(', ') || 'N/A'}</li>
            </ul>
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="text-white">Season:</strong>{' '}
            <span className="italic capitalize">
              {anime.season || '??'} - {anime.year || '??'}
            </span>
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="text-white">Source:</strong>{' '}
            <span className="italic">{anime.source || '??'}</span>
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="text-white">Status:</strong>{' '}
            <span className="italic">{anime.status || '??'}</span>
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="text-white">Score:</strong>{' '}
            <span className="text-yellow-400">{anime.score || '??'} / 10</span>{' '}
            <span className="text-gray-400">
              ({anime.scored_by?.toLocaleString() || '0'} users)
            </span>
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="text-white">Members:</strong>{' '}
            {anime.members?.toLocaleString() || '0'}
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong className="text-white">Favorites:</strong>{' '}
            {anime.favorites?.toLocaleString() || '0'}
          </motion.li>
        </motion.ul>

        {/* Right Column */}
        <motion.ul
          className="space-y-6 text-sm text-gray-300"
          variants={listVariants}
        >
          <motion.li variants={itemVariants}>
            <strong className="text-white">Demographics:</strong>{' '}
            {anime.demographics?.length > 0 ? (
              <span className="flex flex-wrap gap-1">
                {anime.demographics.map((demo) => (
                  <span key={demo.mal_id} className="text-red-400 ">
                    {demo.name}
                  </span>
                ))}
              </span>
            ) : (
              <span className="italic">??</span>
            )}
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="block mb-2 text-white">Producers:</strong>
            {anime.producers?.length > 0 ? (
              <ul className="pl-4 space-y-1 text-gray-300 list-disc">
                {anime.producers.map((producer) => (
                  <li key={producer.mal_id} className="text-red-400">
                    {producer.name}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="italic">Unknown</span>
            )}
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="block mb-2 text-white">Licensors:</strong>{' '}
            {anime.licensors?.length > 0 ? (
              <ul className="pl-4 space-y-1 text-gray-300 list-disc">
                {anime.licensors.map((licensor) => (
                  <li key={licensor.mal_id} className="text-red-400">
                    {licensor.name}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="italic">??</span>
            )}
          </motion.li>

          <motion.li variants={itemVariants}>
            <strong className="block mb-2 text-white">Studios:</strong>
            {anime.studios?.length > 0 ? (
              <ul className="pl-4 space-y-1 text-gray-300 list-disc">
                {anime.studios.map((studio) => (
                  <li key={studio.mal_id} className="text-red-400">
                    {studio.name}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="italic">??</span>
            )}
          </motion.li>
        </motion.ul>
      </div>

      {/* Background Section */}
      <motion.div
        className="p-4 mt-8 text-sm text-gray-300 bg-gray-800 rounded-md"
        variants={itemVariants}
      >
        <strong className="text-white">Background:</strong>{' '}
        <span className="italic ">{anime.background || 'Not Available'}</span>
      </motion.div>
    </motion.div>
  );
};

export default AdditionalSection;

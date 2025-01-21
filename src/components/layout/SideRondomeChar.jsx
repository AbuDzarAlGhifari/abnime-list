import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getRandomCharacter } from '@/services/animeService';

const SideRondomeChar = ({ onSelect }) => {
  const {
    data: character,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['randomCharacter'],
    queryFn: getRandomCharacter,
    refetchInterval: 5000,
    staleTime: 1000 * 60 * 20,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <div className="p-3 mx-5 bg-gray-900 rounded-lg sm:p-5 sm:mx-0 bg-opacity-80">
        <h1 className="px-3 text-lg font-semibold text-gray-200 capitalize border-l-4 border-gray-600 font-poppins sm:text-xl">
          Random Character
        </h1>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-20 h-20 bg-gray-700 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="w-2/3 h-4 mb-2 bg-gray-700 rounded animate-pulse"></div>
            <div className="w-1/2 h-4 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-3 mx-5 bg-gray-900 rounded-lg sm:p-5 sm:mx-0 bg-opacity-80">
        <h1 className="px-3 text-lg font-semibold text-gray-200 capitalize border-l-4 border-gray-600 font-poppins sm:text-xl">
          Random Character
        </h1>
        <p className="mt-4 text-center text-gray-300">
          Failed to load character.
        </p>
      </div>
    );
  }

  return (
    <div className="p-3 mx-5 bg-gray-900 rounded-lg sm:p-5 sm:mx-0">
      <h1 className="px-3 text-lg font-semibold text-gray-200 capitalize border-l-4 border-gray-600 font-poppins sm:text-xl">
        Random Character
      </h1>

      {character && (
        <motion.div
          className="flex items-center gap-4 mt-4 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={() => onSelect(character)}
        >
          <img
            src={character.images.jpg.image_url}
            alt={character.name}
            className="object-cover w-20 h-20 rounded-full shadow-md"
          />
          <div className="text-gray-200">
            <h2 className="text-lg font-bold">{character.name}</h2>
            <p className="text-sm text-gray-400">{character.name_kanji}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SideRondomeChar;

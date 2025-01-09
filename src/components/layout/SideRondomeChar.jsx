import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getRandomCharacter } from '@/services/animeService';

const SideRondomeChar = () => {
  const queryClient = useQueryClient();

  const {
    data: character,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['randomCharacter'],
    queryFn: getRandomCharacter,
    refetchInterval: 5000,
    staleTime: 0,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <div className="p-5 bg-red-900 rounded-lg bg-opacity-60">
        <h1 className="px-3 text-lg font-semibold capitalize border-l-4 border-red-700 font-poppins text-red-50 sm:text-xl">
          Random Chara
        </h1>
        <div className="flex items-center gap-4 mt-4">
          {/* Skeleton untuk gambar */}
          <div className="w-20 h-20 bg-red-700 rounded-full animate-pulse"></div>
          {/* Skeleton untuk teks */}
          <div className="flex-1">
            <div className="w-2/3 h-4 mb-2 bg-red-700 rounded animate-pulse"></div>
            <div className="w-1/2 h-4 bg-red-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-5 bg-red-900 rounded-lg bg-opacity-60">
        <h1 className="px-3 text-lg font-semibold capitalize border-l-4 border-red-700 font-poppins text-red-50 sm:text-xl">
          Random Chara
        </h1>
        <p className="mt-4 text-center text-red-50">
          Failed to load character.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-red-900 rounded-lg bg-opacity-60">
      <h1 className="px-3 text-lg font-semibold capitalize border-l-4 border-red-700 font-poppins text-red-50 sm:text-xl">
        Random Chara
      </h1>

      {character && (
        <motion.div
          className="flex items-center gap-4 mt-4"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img
            src={character.images.jpg.image_url}
            alt={character.name}
            className="object-cover w-20 h-20 rounded-full"
          />
          <div className="text-white">
            <h2 className="text-lg font-bold">{character.name}</h2>
            <p className="text-sm text-gray-300">{character.name_kanji}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SideRondomeChar;

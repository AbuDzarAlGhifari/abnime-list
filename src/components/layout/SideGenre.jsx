import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getAnimeGenres } from '@/services/animeService';

const SideGenre = () => {
  const [showAll, setShowAll] = useState(false);

  const {
    data: genres,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['animeGenres'],
    queryFn: getAnimeGenres,
    staleTime: 1000 * 60 * 10,
  });

  const genresToShow = showAll
    ? genres
    : genres?.slice(0, Math.ceil(genres?.length / 2));

  const skeletonVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0.4, 1],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  if (isLoading) {
    return (
      <div className="p-3 mx-5 bg-red-900 rounded-lg sm:p-5 sm:mx-0 bg-opacity-60">
        <h1 className="px-3 py-2 text-lg font-semibold capitalize border-l-4 border-red-700 font-poppins text-red-50 sm:text-xl">
          Genre
        </h1>
        {/* Skeleton Loading */}
        <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className="h-6 bg-red-800 rounded-lg"
              variants={skeletonVariants}
              initial="initial"
              animate="animate"
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-3 mx-5 bg-red-900 rounded-lg sm:p-5 sm:mx-0 bg-opacity-60">
        <h1 className="px-3 py-2 text-lg font-semibold capitalize border-l-4 border-red-700 font-poppins text-red-50 sm:text-xl">
          Genre
        </h1>
        <p className="mt-4 text-center text-red-50">Failed to load genres.</p>
      </div>
    );
  }

  return (
    <div className="p-3 mx-5 bg-red-900 rounded-lg sm:p-5 sm:mx-0 bg-opacity-60">
      <h1 className="px-3 text-lg font-semibold capitalize border-l-4 border-red-700 font-poppins text-red-50 sm:text-xl">
        Genre
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {genresToShow.map((genre) => (
          <motion.span
            key={genre.mal_id}
            className="relative max-w-full px-3 py-2 text-sm font-medium text-red-100 truncate transition-all bg-red-800 rounded-lg shadow-md cursor-pointer hover:bg-red-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={genre.name}
          >
            {genre.name}
          </motion.span>
        ))}
      </div>

      <div className="mt-4 text-center">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="font-semibold text-red-50 hover:text-red-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </motion.button>
      </div>
    </div>
  );
};

export default SideGenre;

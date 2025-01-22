import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getAnimeGenres } from '@/services/animeService';
import { Link } from 'react-router-dom';

const SideGenre = () => {
  const [showAll, setShowAll] = useState(false);

  const {
    data: genres,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['animeGenres'],
    queryFn: getAnimeGenres,
    staleTime: 1000 * 60 * 20,
    cacheTime: 1000 * 60 * 30,
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
      <div className="p-3 mx-5 bg-gray-900 rounded-lg sm:p-5 sm:mx-0">
        <h1 className="px-3 py-2 text-lg font-semibold text-gray-200 capitalize border-l-4 border-gray-600 font-poppins sm:text-xl">
          Genre
        </h1>
        <div className="grid grid-cols-3 gap-3 mt-4 sm:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={index}
              className="h-6 bg-gray-700 rounded-lg"
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
      <div className="p-3 mx-5 bg-gray-900 rounded-lg sm:p-5 sm:mx-0">
        <h1 className="px-3 py-2 text-lg font-semibold text-gray-200 capitalize border-l-4 border-gray-600 font-poppins sm:text-xl">
          Genre
        </h1>
        <p className="mt-4 text-center text-gray-300">Failed to load genres.</p>
      </div>
    );
  }

  return (
    <div className="p-3 mx-5 bg-gray-900 rounded-lg sm:p-5 sm:mx-0">
      <h1 className="px-3 text-lg font-semibold text-gray-200 capitalize border-l-4 border-gray-600 font-poppins sm:text-xl">
        Genre
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {genresToShow.map((genre) => (
          <Link
            to={`/genre/${genre.mal_id}`}
            key={genre.mal_id}
            className="relative max-w-full px-3 py-2 text-sm font-medium text-gray-300 truncate transition-all bg-gray-700 rounded-lg shadow-md cursor-pointer hover:bg-gray-600"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={genre.name}
            >
              {genre.name}
            </motion.span>
          </Link>
        ))}
      </div>

      <div className="mt-4 text-center">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="px-3 py-1 text-sm font-semibold text-gray-300 transition-all bg-gray-700 rounded-lg hover:bg-gray-600 hover:text-gray-100"
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

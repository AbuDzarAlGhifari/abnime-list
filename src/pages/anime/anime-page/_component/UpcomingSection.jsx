import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getAnimeUpcoming } from '@/services/animeService';
import CardUpcoming from '@/components/common/card/CardUpcoming';
import { SkeletonUpcoming } from './Skeleton';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const UpcomingSection = () => {
  const {
    data: animeUpcoming,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['animeUpcoming'],
    queryFn: getAnimeUpcoming,
    retry: 3,
    staleTime: 1000 * 60 * 20,
    cacheTime: 1000 * 60 * 30,
  });

  const uniqueAnimeUpcoming = animeUpcoming?.filter(
    (anime, index, self) =>
      self.findIndex((a) => a.mal_id === anime.mal_id) === index
  );

  const skeletons = Array(8).fill(null);

  if (isLoading) {
    return (
      <div className="px-4 mt-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-3 gap-4 lg:grid-cols-4">
          {skeletons.map((_, index) => (
            <SkeletonUpcoming key={index} />
          ))}
        </motion.div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-500">Error upcoming anime</div>;
  }

  return (
    <div className="mt-6 bg-red-950 sm:mt-0">
      <div className="flex items-center justify-between px-4 pt-4 text-xs font-semibold text-red-50 sm:px-6 lg:px-8 font-poppins">
        <h1 className="px-2 text-base capitalize border-l-4 border-red-700 sm:text-xl">
          Upcoming Anime
        </h1>
        <Link
          to="/upcoming-anime"
          className="flex items-center justify-center gap-1 px-2 py-1 text-xs italic bg-red-700 rounded-lg cursor-pointer hover:bg-orange-600 sm:text-sm"
        >
          View More <FaLongArrowAltRight />
        </Link>
      </div>

      <motion.div
        layout
        className="grid grid-cols-3 gap-4 px-4 mt-4 lg:grid-cols-4 sm:px-6 lg:px-8"
      >
        <AnimatePresence>
          {uniqueAnimeUpcoming?.map((anime) => (
            <CardUpcoming key={anime.mal_id} all={anime} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UpcomingSection;

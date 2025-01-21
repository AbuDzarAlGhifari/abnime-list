import Card from '@/components/common/card/Card';
import Pagination from '@/components/common/Pagination';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import { ErrorMessage, Loading } from '@/components/common/Status';
import { getAllAnimeSeasonNow } from '@/services/animeService';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useState } from 'react';

const getCurrentSeasonAndYear = () => {
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const season = (() => {
    if (month < 3) return 'Winter';
    if (month < 6) return 'Spring';
    if (month < 9) return 'Summer';
    return 'Fall';
  })();

  return { season, year };
};

const SeasonAnimePage = () => {
  const [page, setPage] = useState(1);

  const { season, year } = getCurrentSeasonAndYear();

  const {
    data: animeSeasonNow,
    isLoading: loadingSeasonNow,
    isError: errorSeasonNow,
  } = useQuery({
    queryKey: ['animeSeasonNow', page],
    queryFn: () => getAllAnimeSeasonNow(page),
    retry: 3,
    staleTime: 1000 * 60 * 10,
  });

  if (loadingSeasonNow) return <Loading />;
  if (errorSeasonNow) return <ErrorMessage />;

  return (
    <motion.div
      className="justify-center min-h-screen pt-24 text-sm bg-red-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="px-2 mx-4 text-base font-bold text-white capitalize border-l-4 border-red-700 sm:mx-6 font-poppins sm:text-xl"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Airing {`${season} - ${year}`}
      </motion.h1>

      <motion.div
        className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {animeSeasonNow.data?.map((anime) => (
          <Card key={anime.mal_id} all={anime} />
        ))}
      </motion.div>

      <div className="flex items-center justify-center">
        <Pagination
          page={page}
          lastPage={animeSeasonNow.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>

      {/* Top Button */}
      <ScrollTopButton />
    </motion.div>
  );
};

export default SeasonAnimePage;

import Card from '@/components/common/card/Card';
import Pagination from '@/components/common/Pagination';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import { ErrorMessage, Loading } from '@/components/common/Status';
import { getAnimeByGenre, getAnimeGenres } from '@/services/animeService';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const getGenreNameById = (genres, genreId) => {
  const genre = genres?.find((g) => g.mal_id === parseInt(genreId, 10));
  return genre ? genre.name : 'Unknown Genre';
};

const PageGenre = () => {
  const { genreId } = useParams();
  const [page, setPage] = useState(1);

  const {
    data: genres,
    isLoading: isGenresLoading,
    isError: isGenresError,
  } = useQuery({
    queryKey: ['animeGenres'],
    queryFn: getAnimeGenres,
    staleTime: 1000 * 60 * 10,
  });

  const {
    data: animeList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['animeByGenre', genreId, page],
    queryFn: () => getAnimeByGenre(genreId, page),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });

  const genreName = getGenreNameById(genres, genreId);

  if (isLoading || isGenresLoading) {
    return <Loading />;
  }

  if (isError || isGenresError) {
    return <ErrorMessage />;
  }

  return (
    <motion.div
      className="justify-center min-h-screen pt-20"
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
        Anime Genre: {genreName}
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
        {animeList.data?.map((anime) => (
          <Card key={anime.mal_id} all={anime} />
        ))}
      </motion.div>

      <div className="flex items-center justify-center">
        <Pagination
          page={page}
          lastPage={animeList.pagination?.last_visible_page || 1}
          setPage={setPage}
        />
      </div>

      {/* Top Button */}
      <ScrollTopButton />
    </motion.div>
  );
};

export default PageGenre;

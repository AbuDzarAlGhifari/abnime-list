import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Card from '@/components/common/card/Card';
import Pagination from '@/components/common/Pagination';
import { getAnimeByGenre, getAnimeGenres } from '@/services/animeService';

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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-white">Loading...</p>
      </div>
    );
  }

  if (isError || isGenresError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-white">
          Failed to load anime or genre information.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <h1 className="px-2 mx-4 text-base font-bold text-white capitalize border-l-4 border-red-700 sm:mx-6 font-poppins sm:text-xl">
        Anime Genre: {genreName}
      </h1>

      <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 lg:grid-cols-6">
        {animeList.data?.map((anime) => (
          <Card key={anime.mal_id} all={anime} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          page={page}
          lastPage={animeList.pagination?.last_visible_page || 1}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default PageGenre;

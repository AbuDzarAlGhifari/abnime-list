import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllAnimeSeasonNow } from '@/services/animeService';
import Pagination from '@/components/common/Pagination';
import Card from '@/components/common/card/Card';

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

  if (loadingSeasonNow) return <div>Loading...</div>;
  if (errorSeasonNow) return <div>Error loading data!</div>;

  return (
    <div className="justify-center min-h-screen pt-24 text-sm bg-red-950">
      <h1 className="px-2 text-base font-bold text-white capitalize border-l-4 border-red-700 sm:mx-6 font-poppins sm:text-xl">
        Airing {`${season} - ${year}`}
      </h1>
      <div className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4">
        {animeSeasonNow.data?.map((anime) => (
          <Card key={anime.mal_id} all={anime} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          page={page}
          lastPage={animeSeasonNow.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default SeasonAnimePage;

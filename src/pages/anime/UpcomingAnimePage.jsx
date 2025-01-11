import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllAnimeUpcoming } from '@/services/animeService';
import Pagination from '@/components/common/Pagination';
import Card from '@/components/common/card/Card';

const UpcomingAnimePage = () => {
  const [page, setPage] = useState(1);

  const {
    data: animeUpcoming,
    isLoading: loadingUpcoming,
    isError: errorUpcoming,
  } = useQuery({
    queryKey: ['animeUpcoming', page],
    queryFn: () => getAllAnimeUpcoming(page),
    retry: 3,
    staleTime: 1000 * 60 * 10,
  });

  if (loadingUpcoming) return <div>Loading...</div>;
  if (errorUpcoming) return <div>Error loading data!</div>;

  return (
    <div className="justify-center min-h-screen pt-24 text-sm bg-red-950">
      <h1 className="px-2 text-base font-bold text-white capitalize border-l-4 border-red-700 sm:mx-6 font-poppins sm:text-xl">
        Upcoming Anime
      </h1>
      <div className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4">
        {animeUpcoming.data?.map((anime) => (
          <Card key={anime.mal_id} all={anime} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          page={page}
          lastPage={animeUpcoming.pagination?.last_visible_page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default UpcomingAnimePage;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getAnimeUpcoming } from '@/services/animeService';
import Card from '@/components/common/card/Card';

const UpcomingSection = () => {
  const {
    data: animeUpcoming,
    isLoading: loadingUpcoming,
    isError: errorUpcoming,
  } = useQuery({
    queryKey: ['animeUpcoming'],
    queryFn: getAnimeUpcoming,
    retry: 3,
    staleTime: 1000 * 60 * 5,
  });

  if (loadingUpcoming) return <div>Loading Upcoming Anime...</div>;
  if (errorUpcoming) return <div>Error loading upcoming anime</div>;

  return (
    <div>
      <div className="flex justify-between px-4 pt-4 mx-1 mt-1 text-xs font-semibold text-white sm:mx-3 sm:mt-2 lg:mt-3 font-poppins rounded-t-md">
        <h1>Up Comming Anime</h1>
        <Link
          to="/up"
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
        >
          other...
        </Link>
      </div>
      <div className="grid grid-cols-3 mx-2 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 rounded-b-md">
        {animeUpcoming?.map((up) => (
          <Card key={up.mal_id} all={up} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingSection;

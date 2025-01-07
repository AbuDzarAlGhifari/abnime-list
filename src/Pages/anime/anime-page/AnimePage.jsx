import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  getTopAnime,
  getAnimeUpcoming,
  getAnimeSeasonNow,
} from '@/services/animeService';
import Card from '@/components/common/card/Card';
// import HeroSection from './_component/HeroSection';

const AnimePage = () => {
  // Fetch Top Anime
  const {
    data: animeTop,
    isLoading: loadingTop,
    isError: errorTop,
  } = useQuery({
    queryKey: ['topAnime'],
    queryFn: getTopAnime,
    retry: 3,
    staleTime: 1000 * 60 * 5,
  });

  // Fetch Upcoming Anime
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

  // Fetch Season Now Anime
  const {
    data: animeSeasonNow,
    isLoading: loadingSeasonNow,
    isError: errorSeasonNow,
  } = useQuery({
    queryKey: ['animeSeasonNow'],
    queryFn: getAnimeSeasonNow,
    retry: 3,
    staleTime: 1000 * 60 * 5,
  });

  if (loadingTop || loadingUpcoming || loadingSeasonNow)
    return <div>Loading...</div>;
  if (errorTop || errorUpcoming || errorSeasonNow)
    return <div>Error loading data</div>;

  return (
    <div className="justify-center min-h-screen py-4 text-sm bg-red-700">
      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Anime Season Now Section */}
      <div className="flex justify-between px-4 pt-4 mx-1 mt-1 text-xs font-semibold text-white bg-red-700 sm:mx-3 sm:mt-2 lg:mt-3 font-poppins rounded-t-md">
        <h1>Anime Top Season</h1>
        <Link
          to="/top"
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
        >
          other...
        </Link>
      </div>
      <div className="grid grid-cols-3 mx-2 bg-red-700 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 rounded-b-md">
        {animeSeasonNow?.map((now) => (
          <Card key={now.mal_id} all={now} />
        ))}
      </div>

      {/* Anime Popular Section */}
      <div className="flex justify-between px-4 pt-4 mx-1 mt-1 text-xs font-semibold text-white bg-red-700 sm:mx-3 sm:mt-2 lg:mt-3 font-poppins rounded-t-md">
        <h1>Anime Popular</h1>
        <Link
          to="/popular"
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
        >
          other...
        </Link>
      </div>
      <div className="grid grid-cols-3 mx-2 bg-red-700 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 rounded-b-md">
        {animeTop?.map((top) => (
          <Card key={top.mal_id} all={top} />
        ))}
      </div>

      {/* Upcoming Anime Section */}
      <div className="flex justify-between px-4 pt-4 mx-1 mt-1 text-xs font-semibold text-white bg-red-700 sm:mx-3 sm:mt-2 lg:mt-3 font-poppins rounded-t-md">
        <h1>Up Comming Anime</h1>
        <Link
          to="/up"
          className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
        >
          other...
        </Link>
      </div>
      <div className="grid grid-cols-3 mx-2 bg-red-700 sm:grid-cols-4 lg:grid-cols-6 sm:mx-4 rounded-b-md">
        {animeUpcoming?.map((up) => (
          <Card key={up.mal_id} all={up} />
        ))}
      </div>
    </div>
  );
};

export default AnimePage;

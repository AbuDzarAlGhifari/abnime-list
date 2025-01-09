import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAnimeDetail } from '@/services/animeService';
import { FaCalendar, FaFilm, FaPlayCircle, FaStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import {
  getDurationInMinutes,
  getFormattedDate,
  getFormattedRating,
} from '@/helper';

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen text-white">
    Loading...
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="flex items-center justify-center min-h-screen text-red-500">
    {message || 'Failed to fetch anime details.'}
  </div>
);

const DetailAnimePage = () => {
  const { id } = useParams();
  const {
    data: anime,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['animeDetail', id],
    queryFn: () => getAnimeDetail(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error?.message} />;

  return (
    <div className="text-white">
      {/* Header Section */}
      <div className="relative w-full h-[400px] sm:h-[600px] bg-red-950">
        <div className="absolute inset-0">
          <img
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            className="object-cover object-center w-full h-full md:object-top"
          />
        </div>
        <div className="absolute inset-0 bg-red-950 opacity-40 backdrop-blur-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-transparent to-red-950 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent opacity-70"></div>
        <div className="absolute flex p-2 pt-28 sm:flex-row">
          <img
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            className="relative z-10 w-24 mx-4 rounded-xl sm:mx-6 sm:w-32 md:mx-8 md:w-36 lg:mx-10 lg:w-64"
          />
          <div>
            <h1 className="text-3xl font-extrabold font-poppins">
              {anime.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-300 md:gap-4 md:mt-4">
              <span className="flex items-center gap-1">
                <FaPlayCircle /> {anime.type || 'Unknown'}
              </span>
              <span className="flex items-center gap-1">
                <FaFilm /> Eps {anime.episodes || 'Unknown'}
              </span>
              <span className="flex items-center gap-1">
                <IoMdTime />
                {getDurationInMinutes(anime.duration) || 'Unknown'} min
              </span>
              <span className="flex items-center gap-1 text-sm">
                <FaCalendar />
                {getFormattedDate(anime.aired?.string) || 'Unknown'}
              </span>
              <span className="flex items-center gap-1 text-yellow-300">
                <FaStar /> {anime.score}
              </span>
              <span className="px-2 py-1 text-xs text-white bg-orange-600 rounded md:text-sm">
                {getFormattedRating(anime.rating) || 'Unknown'}
              </span>
            </div>
            <p className="my-2 text-sm text-justify mr-14 md:my-4 md:text-lg">
              {anime.synopsis}
            </p>
            {anime.trailer?.url && (
              <Link
                to={anime.trailer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-semibold text-white scale-95 border-2 border-red-700 rounded-md hover:scale-105 hover:border-red-500 hover:bg-red-300"
              >
                Watch Trailer
              </Link>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-red-950 via-transparent to-transparent"></div>
      </div>

      <div className="flex items-center justify-between px-4 pt-4 text-xs font-semibold text-red-50 sm:px-6 lg:px-8 font-poppins">
        <h2 className="px-2 text-base capitalize border-l-4 border-red-700 sm:text-xl">
          Characters
        </h2>
      </div>
      <div className="px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-300">Character coming soon...</p>
      </div>
    </div>
  );
};

export default DetailAnimePage;

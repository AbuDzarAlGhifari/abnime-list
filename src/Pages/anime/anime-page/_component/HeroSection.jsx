import { getAnimeDetails } from '@/services/animeService';
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const data = await getAnimeDetails(21);
        setAnime(data);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };

    fetchAnimeDetails();
  }, []);

  if (!anime) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div
      className="relative w-full h-[600px] text-white "
      style={{
        backgroundImage: `url(${anime.images.jpg.large_image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center w-1/2 h-full px-6">
        <h1 className="text-6xl font-semibold leading-snug">{anime.title}</h1>

        {/* Synopsis */}
        <p className="mt-4 text-lg text-gray-300 line-clamp-3">
          {anime.synopsis}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-8 py-3 text-lg font-medium text-white transition border border-white rounded-full hover:bg-gray-800">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

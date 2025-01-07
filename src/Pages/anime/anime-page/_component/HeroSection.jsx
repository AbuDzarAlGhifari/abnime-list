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
      className="relative w-full h-[600px] text-white"
      style={{
        backgroundImage: `url(${anime.images.jpg.large_image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl px-6 mx-auto">
        {/* Tags */}
        <div className="flex gap-2 mb-4 text-sm">
          <span className="px-3 py-1 bg-gray-800 rounded-full">PG</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full">4K</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full">DUB</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full">SUB</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full">TV</span>
          <span className="px-3 py-1 bg-gray-800 rounded-full">
            {anime.episodes} Ep
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full">24m</span>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold leading-snug">{anime.title}</h1>

        {/* Synopsis */}
        <p className="mt-4 text-lg text-gray-300 line-clamp-3">
          {anime.synopsis}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-8 py-3 text-lg font-medium text-white transition bg-red-600 rounded-full hover:bg-red-700">
            Watch Now
          </button>
          <button className="px-8 py-3 text-lg font-medium text-white transition border border-white rounded-full hover:bg-gray-800">
            + Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

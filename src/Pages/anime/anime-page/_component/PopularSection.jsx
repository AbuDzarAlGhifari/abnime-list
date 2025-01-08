import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getAnimeSeasonNow } from '@/services/animeService';
import CardPopular from '@/components/common/card/CardPopular';
import { motion } from 'framer-motion';

const PopularSection = () => {
  const {
    data: animeSeasonNow,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['animeSeasonNow'],
    queryFn: getAnimeSeasonNow,
    retry: 3,
    staleTime: 1000 * 60 * 5,
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="text-center text-white">
        <div className="px-4 mt-4 sm:px-6 lg:px-8 ">
          <Slider {...sliderSettings}>
            {/* Skeleton loader */}
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse ">
                <div className="h-48 mx-1 mb-4 bg-gray-600 rounded-lg sm:h-64 lg:h-72"></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Error loading popular anime
      </div>
    );
  }

  return (
    <div className="bg-red-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between px-4 pt-4 text-xs font-semibold text-white sm:px-6 lg:px-8 font-poppins">
          <h1 className="text-lg sm:text-xl">Popular Anime</h1>
          <Link
            to="/popular"
            className="italic text-yellow-300 underline cursor-pointer hover:text-blue-400"
          >
            View More
          </Link>
        </div>

        <div className="px-4 mt-4 sm:px-6 lg:px-8">
          <Slider {...sliderSettings}>
            {animeSeasonNow?.map((anime) => (
              <motion.div
                key={anime.mal_id}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CardPopular all={anime} />
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default PopularSection;

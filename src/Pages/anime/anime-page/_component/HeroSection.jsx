import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Slider from 'react-slick';
import { getTopAnime } from '@/services/animeService';
import {
  FaCalendar,
  FaFilm,
  FaLongArrowAltRight,
  FaPlayCircle,
  FaStar,
} from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

import {
  SampleNextArrow,
  SamplePrevArrow,
} from '@/components/common/SliderCustom';
import { SkeletonHero } from './Skeleton';
import {
  getDurationInMinutes,
  getFormattedDate,
  getFormattedRating,
} from '@/helper';

const HeroSection = () => {
  const {
    data: topAnime,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['topAnime'],
    queryFn: getTopAnime,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    appendDots: (dots) => (
      <div style={{ bottom: '30px' }}>
        <ul className="flex justify-center gap-1 sm:gap-2 dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`sm:w-4 sm:h-3 h-1 w-2 rounded-full cursor-pointer ${
          i === activeSlide ? 'bg-red-600' : 'bg-red-900'
        } hover:bg-red-600`}
      ></div>
    ),
  };

  if (isLoading) {
    return <SkeletonHero />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load top anime: {error.message || 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[600px] text-white bg-red-950">
      <Slider {...settings}>
        {topAnime.slice(0, 10).map((anime) => (
          <div
            key={anime.mal_id}
            className="relative flex items-center w-full h-[600px] sm:h-[700px] text-white bg-red-950"
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center w-full h-full px-6 md:w-2/3 md:px-16">
              <h1 className="text-3xl font-bold md:text-4xl">{anime.title}</h1>
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
              <p className="mt-2 text-sm md:mt-4 md:text-lg line-clamp-3">
                {anime.synopsis}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4 md:gap-4 md:mt-6">
                <button className="flex items-center gap-2 px-4 py-2 font-semibold text-white border-2 rounded-full md:px-6 md:py-3 hover:text-gray-300 hover:border-gray-300">
                  More Details <FaLongArrowAltRight />
                </button>
              </div>
            </div>

            {/* Background */}
            <div className="absolute top-0 bottom-0 right-0 w-full h-full shadow-lg md:w-2/3 shadow-red-950">
              <img
                src={anime.images.webp.large_image_url}
                alt={anime.title}
                className="object-cover object-center w-full h-full md:object-top"
              />

              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-transparent to-red-950"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent opacity-70"></div>
            </div>

            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-red-950 via-transparent to-transparent"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;

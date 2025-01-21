import { getTopAnime } from '@/services/animeService';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
import Slider from 'react-slick';

import {
  getDurationInMinutes,
  getFormattedDate,
  getFormattedRating,
} from '@/helper';
import { SkeletonHero } from './Skeleton';

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
        className={`sm:w-3.5 sm:h-2 h-1 w-2 rounded-full cursor-pointer ${
          i === activeSlide ? 'bg-red-600' : 'bg-red-900'
        } hover:bg-red-600`}
      ></div>
    ),
  };

  if (isLoading) return <SkeletonHero />;
  if (isError) {
    console.log(error.message);
    return null;
  }

  return (
    <div className="relative w-full h-[200px] sm:h-[500px] text-white bg-red-950">
      <Slider {...settings}>
        {topAnime.slice(0, 10).map((anime) => (
          <div
            key={anime.mal_id}
            className="relative flex items-center w-full h-[400px] sm:h-[600px] text-white bg-red-950"
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center w-full h-full px-6 md:w-2/3 md:px-16">
              <h1 className="text-2xl font-bold md:text-4xl">{anime.title}</h1>
              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-300 sm:text-base md:gap-4 md:mt-4">
                <span className="flex items-center gap-1">
                  <FaPlayCircle /> {anime.type || '??'}
                </span>
                <span className="flex items-center gap-1">
                  <FaFilm /> Eps {anime.episodes || '??'}
                </span>
                <span className="flex items-center gap-1">
                  <IoMdTime />
                  {getDurationInMinutes(anime.duration) || '??'} min
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <FaCalendar />
                  {getFormattedDate(anime.aired?.string) || '??'}
                </span>
                <span className="flex items-center gap-1 text-yellow-300">
                  <FaStar /> {anime.score}
                </span>
                <span className="px-1.5 py-0.5 text-xs text-white bg-orange-600 rounded sm:px-2 sm:py-1 md:text-sm">
                  {getFormattedRating(anime.rating) || '??'}
                </span>
              </div>
              <p className="mt-2 text-xs md:mt-4 md:text-lg line-clamp-2 sm:line-clamp-3">
                {anime.synopsis}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4 md:gap-4 md:mt-6">
                <Link
                  to={`/detail-anime/${anime.mal_id}`}
                  key={anime.mal_id}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-white border-2 rounded-2xl sm:px-6 sm:py-3 hover:text-gray-300 hover:border-gray-300"
                >
                  More Details <FaLongArrowAltRight />
                </Link>
              </div>
            </div>

            {/* Background */}
            <div className="absolute top-0 bottom-0 right-0 w-full h-full shadow-lg md:w-2/3 shadow-red-950">
              <img
                src={anime.images.webp.large_image_url}
                alt={anime.title}
                className="object-cover object-top w-full h-full"
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

import React, { useEffect, useState } from 'react';
import {
  FaCalendar,
  FaFilm,
  FaLongArrowAltRight,
  FaPlayCircle,
  FaStar,
} from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import {
  getDurationInMinutes,
  getFormattedDate,
  getFormattedRating,
} from '@/helper';
import { Link } from 'react-router-dom';
import ModalDetail from './ModalDetali';

const DetailSection = ({ anime }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full h-[400px] sm:h-[600px] bg-red-950">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          className="object-cover object-center w-full h-full md:object-top"
        />
      </div>
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-red-950 opacity-40 backdrop-blur-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-transparent to-red-950 opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent opacity-70"></div>

      {/* Content Section */}
      <div className="grid grid-cols-12 pt-16 sm:pt-24 sm:mx-24">
        {/* Anime Thumbnail */}
        <div className="z-20 col-span-5 pl-6 sm:pl-10">
          <img
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            className="z-10 rounded-lg h-36 sm:h-96"
          />
        </div>

        {/* Anime Details */}
        <div className="z-20 col-span-7">
          <h1 className="text-lg font-extrabold sm:text-3xl font-poppins">
            {anime.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-300 sm:text-base md:gap-4 md:mt-4">
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
          <p className="my-4 text-xs text-justify md:my-6 md:text-base">
            {anime.synopsis.slice(0, 200)}...
            {anime.synopsis.length > 200 && (
              <button
                onClick={openModal}
                className="ml-2 text-red-500 hover:underline"
              >
                Read More
              </button>
            )}
          </p>
          {/* Trailer Button */}
          {anime.trailer?.url && (
            <Link
              to={anime.trailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs gap-1.5 px-3 py-1.5 font-semibold text-white border-2 rounded-full w-fit sm:px-4 sm:py-2 hover:text-gray-300 hover:border-gray-300"
            >
              Watch Trailer <FaLongArrowAltRight />
            </Link>
          )}
        </div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-red-950 via-transparent to-transparent"></div>

      {/* Modal */}
      <ModalDetail isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-gray-700">{anime.synopsis}</p>
      </ModalDetail>
    </div>
  );
};

export default DetailSection;

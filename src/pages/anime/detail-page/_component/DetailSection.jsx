import {
  getDurationInMinutes,
  getFormattedDate,
  getFormattedRating,
} from '@/helper';
import { useState } from 'react';
import {
  FaCalendar,
  FaFilm,
  FaLongArrowAltRight,
  FaPlayCircle,
  FaStar,
} from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ModalSinopsis from './ModalSinopsis';

const DetailSection = ({ anime }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

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
      <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-transparent to-red-950 opacity-55"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent opacity-55"></div>

      {/* Content Section */}
      <div className="flex justify-center gap-3 px-8 pt-20 sm:gap-10 sm:pt-28">
        {/* Anime Thumbnail */}
        <motion.div
          className="z-20"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            className="z-10 w-40 h-auto rounded-lg shadow sm:w-64 -rotate-6"
          />
        </motion.div>

        {/* Anime Details */}
        <motion.div
          className="z-20"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-sm font-bold sm:font-extrabold sm:text-3xl font-poppins">
            {anime.title}
          </h1>
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
            <span className="flex items-center gap-1">
              <FaCalendar />
              {getFormattedDate(anime.aired?.string) || '??'}
            </span>
            <span className="flex items-center gap-1 text-yellow-300">
              <FaStar /> {anime.score || '??'}
            </span>
            <span className="px-2 py-1 text-xs text-white bg-orange-600 rounded md:text-sm">
              {getFormattedRating(anime.rating) || '??'}
            </span>
          </div>
          <hr className="my-4" />

          <div className="flex flex-wrap gap-1 sm:gap-2">
            {anime.genres?.length > 0 ? (
              anime.genres.map((genre) => (
                <Link
                  to={`/genre/${genre.mal_id}`}
                  key={genre.mal_id}
                  className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded-md cursor-pointer md:text-sm hover:bg-red-700"
                >
                  {genre.name}
                </Link>
              ))
            ) : (
              <span className="text-gray-400">No genres available</span>
            )}
          </div>

          <p className="sm:my-4 my-2 text-xs text-justify max-w-56 sm:max-w-[700px] md:my-6 md:text-base">
            {anime.synopsis?.slice(0, 200)}...
            {anime.synopsis?.length > 200 && (
              <button
                onClick={openModal}
                className="ml-2 text-yellow-300 hover:underline"
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
              className="flex items-center w-fit bg-red-700 rounded-md text-xs gap-1.5 px-2 py-1 sm:px-3 sm:py-2 font-bold hover:bg-red-800"
            >
              Watch Trailer <FaLongArrowAltRight />
            </Link>
          )}
        </motion.div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-red-950 via-transparent to-transparent"></div>

      {/* Modal */}
      <ModalSinopsis
        isOpen={isModalOpen}
        onClose={closeModal}
        anime={anime.synopsis}
      />
    </div>
  );
};

export default DetailSection;

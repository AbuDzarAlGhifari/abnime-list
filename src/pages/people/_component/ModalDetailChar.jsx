import React from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ModalDetailChar = ({ isOpen, onClose, character }) => {
  if (!isOpen) return null;

  const { images, name, mal_id } = character.character;
  const { title, mal_id: animeId, images: animeImages } = character.anime;
  const { role } = character;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative w-11/12 p-6 bg-gray-800 shadow-2xl rounded-xl sm:w-4/5 md:w-3/5 lg:w-2/5">
        <button
          onClick={onClose}
          className="absolute z-40 flex items-center justify-center w-10 h-10 text-xl text-gray-400 transition-colors duration-300 bg-gray-700 rounded-full top-4 right-4 hover:bg-gray-600 hover:text-white focus:outline-none"
          aria-label="Close"
        >
          <IoClose />
        </button>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
          {/* Character Section */}
          <div className="relative w-full">
            <img
              className="w-full rounded-lg shadow-lg"
              src={images?.jpg.image_url}
              alt={name}
            />
            <div className="absolute inset-x-0 bottom-0 p-4 rounded-b-lg bg-gradient-to-t from-black via-black/70">
              <h3 className="text-xs font-bold text-white sm:text-base">
                {name}
              </h3>
              <p className="mt-1 text-xs text-gray-300">{role}</p>
              <Link
                to={`/character/${mal_id}`}
                className="inline-block px-2 py-1 mt-2 text-xs font-medium text-white transition-all duration-300 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600"
              >
                View Character
              </Link>
            </div>
          </div>

          {/* Anime Section */}
          <div className="relative w-full">
            <img
              className="w-full rounded-lg shadow-lg"
              src={animeImages?.jpg.image_url}
              alt={title}
            />
            <div className="absolute inset-x-0 bottom-0 p-4 rounded-b-lg bg-gradient-to-t from-black via-black/70">
              <h3 className="text-xs font-bold text-white sm:text-base">
                {title}
              </h3>
              <Link
                to={`/detail-anime/${animeId}`}
                className="inline-block px-2 py-1 mt-2 text-xs font-medium text-white transition-all duration-300 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600"
              >
                View Anime
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailChar;

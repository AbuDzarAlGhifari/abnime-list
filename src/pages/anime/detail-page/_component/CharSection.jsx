import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import ModalCharacter from './ModalCharacter';

const CharSection = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [visitedCharacters, setVisitedCharacters] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);

    if (!visitedCharacters.includes(character.mal_id)) {
      setVisitedCharacters((prev) => [...prev, character.mal_id]);
    }
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="px-4 py-2 sm:px-6 lg:px-8">
      <h2 className="px-2 mb-4 text-base font-bold capitalize border-l-4 border-red-700 sm:text-xl">
        Characters
      </h2>

      {characters && characters.length > 0 ? (
        <Slider {...settings}>
          {characters.slice(0, 12).map(({ character }) => {
            const isVisited = visitedCharacters.includes(character.mal_id);

            return (
              <motion.div
                key={character.mal_id}
                className="relative text-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 1.1,
                  boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)',
                }}
                onClick={() => handleCharacterClick(character)}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <div className="relative p-0 overflow-hidden border-2 border-transparent rounded-md hover:bg-blue-500">
                  <img
                    src={character.images.jpg.image_url}
                    alt={character.name}
                    className={`object-cover w-full h-auto rounded-md ${
                      isVisited ? 'opacity-50' : ''
                    }`}
                  />
                  {isVisited && (
                    <div className="absolute inset-0 rounded-md bg-black/50"></div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-sm font-semibold text-white bg-black/70 sm:text-base">
                    {character.name}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      ) : (
        <p className="text-sm text-red-300">No characters found</p>
      )}

      <ModalCharacter
        selectedCharacter={selectedCharacter}
        onClose={closeModal}
      />
    </div>
  );
};

export default CharSection;

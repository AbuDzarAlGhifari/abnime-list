import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getCharDetail } from '@/services/animeService';
import { IoClose } from 'react-icons/io5';

const ModalCharacter = ({ selectedCharacter, onClose }) => {
  const [characterDetails, setCharacterDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      if (!selectedCharacter) return;
      setIsLoading(true);
      setError(null);

      try {
        const details = await getCharDetail(selectedCharacter.mal_id);
        setCharacterDetails(details);
      } catch (err) {
        setError('Failed to load character details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [selectedCharacter]);

  return (
    <AnimatePresence>
      {selectedCharacter && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg p-4 text-center rounded-lg shadow-xl sm:p-6 bg-red-950"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute text-red-50 top-3 right-3 hover:text-red-800 focus:outline-none"
            >
              <IoClose className="size-6" />
            </button>

            {isLoading ? (
              <p className="text-red-50">Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : characterDetails ? (
              <>
                <h3 className="mb-4 text-2xl font-bold text-red-50">
                  {characterDetails.name}
                </h3>
                <h3 className="mb-4 text-2xl font-bold text-red-50">
                  {' ( '}
                  {characterDetails.name_kanji}
                  {' ) '}
                </h3>
                <motion.img
                  src={characterDetails.images.jpg.image_url}
                  alt={characterDetails.name}
                  className="w-48 h-auto mx-auto rounded-md shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                />
                <Link
                  to={`/character/${characterDetails.mal_id}`}
                  className="block px-4 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-800"
                >
                  More About Character
                </Link>
              </>
            ) : (
              <p className="text-red-50">No details available.</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalCharacter;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCharDetail } from '@/services/animeService';

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg p-6 text-center bg-red-400 rounded-lg shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute text-gray-500 top-3 right-3 hover:text-gray-800 focus:outline-none"
            >
              ✖
            </button>

            {isLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : characterDetails ? (
              <>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  {characterDetails.name}
                </h3>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
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
                {/* <p className="mt-4 text-gray-600">{characterDetails.about}</p> */}
              </>
            ) : (
              <p className="text-gray-500">No details available.</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalCharacter;

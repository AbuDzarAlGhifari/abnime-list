import { useState } from 'react';
import { motion } from 'framer-motion';

function PeopleDetails({ people }) {
  const [showMore, setShowMore] = useState(false);

  const { about, name, images, alternate_names, birthday, favorites } = people;

  const style = {
    whiteSpace: 'pre-line',
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex p-4 mx-3 sm:flex-row sm:mx-4 lg:p-6">
      {/* Animasi Gambar */}
      <motion.img
        className="h-48 rounded-lg sm:h-60 lg:h-96"
        src={images?.jpg.image_url}
        alt={name}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Animasi Konten */}
      <motion.div
        className="ml-2 text-xs text-white sm:ml-4 lg:ml-6 sm:text-sm lg:text-lg"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-sm font-bold text-yellow-200 font-poppins sm:text-lg lg:text-2xl">
          {name}
        </h1>

        {alternate_names?.length > 0 && (
          <div className="mt-2">
            <h3>Alternate Names:</h3>
            <ul className="list-disc list-inside">
              {alternate_names.map((altName, index) => (
                <li key={index}>{altName}</li>
              ))}
            </ul>
          </div>
        )}

        {birthday && (
          <p className="mt-2">
            <span>Birthday:</span> {new Date(birthday).toLocaleDateString()}
          </p>
        )}

        {favorites && (
          <p className="mt-2">
            <span>Favorites:</span> {favorites}
          </p>
        )}

        <motion.h3
          style={style}
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          {showMore ? about : about?.substring(0, 250) + '...'}
          <button
            className="ml-2 font-semibold text-yellow-300 underline hover:text-blue-400"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </motion.h3>
      </motion.div>
    </div>
  );
}

export default PeopleDetails;

import { useState } from 'react';
import { motion } from 'framer-motion';

const CharacterDetails = ({ character }) => {
  const [showMore, setShowMore] = useState(false);
  const { images, name, name_kanji, about, nicknames } = character;

  const style = {
    whiteSpace: 'pre-line',
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex p-4 pt-20 mb-8 rounded-lg"
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
    >
      <motion.img
        className="h-48 rounded-lg rotate-2 sm:h-60 lg:h-96"
        src={images?.webp.image_url}
        alt={name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="ml-4 text-xs text-white sm:ml-10 sm:text-sm lg:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.span
          className="text-sm font-semibold text-yellow-200 sm:text-lg lg:text-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {name}
        </motion.span>
        <motion.span
          className="text-sm font-semibold text-yellow-200 sm:text-lg lg:text-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {' ( '}
          {name_kanji}
          {' ) '}
        </motion.span>
        {/* Nicknames */}
        {nicknames && nicknames.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {nicknames.map((nickname, index) => (
              <motion.h1
                key={index}
                className="text-white"
                whileHover={{ scale: 1.1, color: '#FFD700' }}
              >
                # {nickname}
              </motion.h1>
            ))}
          </motion.div>
        )}
        <h3 style={style}>
          {showMore ? about : about?.substring(0, 200) + '...'}
          <motion.button
            className="font-semibold text-yellow-300 underline transition-all duration-200 hover:text-blue-400"
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </motion.button>
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default CharacterDetails;

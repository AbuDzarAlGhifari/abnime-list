import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardVoiceActor = ({ mal_id, image_url, name, language }) => {
  return (
    <motion.div
      className="mx-1 transition-transform duration-300 ease-in-out transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/people/${mal_id}`}>
        <div className="relative flex flex-col h-full overflow-hidden bg-gray-800 rounded-lg shadow-lg">
          <div className="w-full h-48 sm:h-56 md:h-64">
            <img
              className="object-cover w-full h-full"
              src={image_url}
              alt={name}
            />
          </div>
          <motion.div
            className="flex-grow px-4 py-3 text-center bg-gray-900 bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-white truncate sm:text-base md:text-lg">
              {name}
            </h4>
            <p className="text-xs text-yellow-400 sm:text-sm md:text-base">
              {language}
            </p>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CardVoiceActor;

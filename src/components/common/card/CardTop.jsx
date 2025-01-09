import { SkeletonTop } from '@/pages/anime/anime-page/_component/Skeleton';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CardTop = ({ animeData, isLoading }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  if (isLoading) {
    return <SkeletonTop />;
  }

  return (
    <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3">
      {animeData?.map((anime, index) => {
        const { title, images, mal_id, airing, score, genres, episodes, type } =
          anime;
        const genre = genres?.map((g) => g.name).join(', ') || 'Unknown';

        return (
          <Link to={`/anime/${mal_id}`} key={mal_id}>
            <motion.div
              key={mal_id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex overflow-hidden transition-all duration-500 bg-red-600 rounded-md h-44 bg-opacity-35 hover:bg-opacity-60"
            >
              <div className="flex-shrink-0 w-1/3">
                <img
                  src={images?.webp?.image_url}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col justify-between w-2/3 p-4 text-red-50">
                <p className="text-sm font-semibold truncate">{title}</p>

                <div className="mt-2 space-y-2 text-xs">
                  <div>
                    <span className="font-medium">Type:</span>{' '}
                    {type || 'Unknown'}
                  </div>
                  <div>
                    <span className="font-medium">Eps:</span>{' '}
                    {episodes || 'N/A'}
                  </div>
                  <div className="flex items-center gap-1 ">
                    <IoStar className="text-sm" />
                    <span>{score || 'N/A'} / 10</span>
                  </div>
                </div>
                <hr />
                <div className="text-xs text-red-200 ">{genre}</div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardTop;

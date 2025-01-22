import CardVoiceActor from '@/components/common/card/CardVoiceActor';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const VoiceActors = ({ voices }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="px-4 py-6 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
    >
      <h2 className="pl-4 mb-6 text-xl font-semibold text-white border-l-4 border-yellow-500">
        Voice Actors
      </h2>
      {voices?.length > 3 ? (
        <Slider {...settings}>
          {voices?.map((voice_actors, index) => {
            const { language } = voice_actors;
            const { images, name, mal_id } = voice_actors.person;

            return (
              <CardVoiceActor
                key={index}
                mal_id={mal_id}
                image_url={images?.jpg.image_url}
                name={name}
                language={language}
              />
            );
          })}
        </Slider>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {voices?.map((voice_actors, index) => {
            const { language } = voice_actors;
            const { images, name, mal_id } = voice_actors.person;

            return (
              <CardVoiceActor
                key={index}
                mal_id={mal_id}
                image_url={images?.jpg.image_url}
                name={name}
                language={language}
              />
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default VoiceActors;

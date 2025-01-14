import CardVoiceActor from '@/components/common/card/CardVoiceActor';
import Slider from 'react-slick';

const VoiceActors = ({ voices }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="pl-4 mb-6 text-xl font-semibold text-white border-l-4 border-yellow-500">
        Voice Actors
      </h2>
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
    </div>
  );
};

export default VoiceActors;

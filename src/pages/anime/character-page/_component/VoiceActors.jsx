import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const VoiceActors = ({ voices }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
            <div
              key={index}
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <Link to={`/people/${mal_id}`}>
                <div className="relative flex flex-col h-full overflow-hidden bg-red-900 rounded-lg shadow-xl">
                  <div className="flex-shrink-0">
                    <img
                      className="object-cover object-top w-full h-48 transition-transform duration-300 ease-in-out transform sm:h-64 lg:h-72 hover:scale-110"
                      src={images?.jpg.image_url}
                      alt={name}
                    />
                  </div>
                  <div className="flex-grow px-4 py-3 text-center bg-black bg-opacity-70">
                    <h4 className="text-sm font-semibold text-white truncate sm:text-lg">
                      {name}
                    </h4>
                    <p className="text-xs text-yellow-300 sm:text-sm">
                      {language}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default VoiceActors;

import React from 'react';
import Slider from 'react-slick';

const CharSection = ({ characters }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-2 sm:px-6 lg:px-8">
      <h2 className="px-2 text-base capitalize border-l-4 border-red-700 sm:text-xl">
        Characters
      </h2>
      {characters && characters.length > 0 ? (
        <Slider {...settings}>
          {characters.slice(0, 12).map(({ character }) => (
            <div key={character.mal_id} className="p-2 text-center">
              <img
                src={character.images.jpg.image_url}
                alt={character.name}
                className="object-cover w-full rounded-md h-36"
              />
              <p className="mt-2 text-white">{character.name}</p>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-sm text-gray-300">No characters found.</p>
      )}
    </div>
  );
};

export default CharSection;

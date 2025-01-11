import { useState } from 'react';

function PeopleDetails({ people, about, name, images, showMore, setShowMore }) {
  const style = {
    whiteSpace: 'pre-line',
  };

  return (
    <div className="flex p-2 mx-3 sm:mx-4 lg:p-6">
      <img
        className="h-48 rounded-lg sm:h-60 lg:h-96"
        src={images?.jpg.image_url}
        alt={name}
      />
      <div className="ml-2 mr-2 text-xs text-white sm:ml-4 lg:ml-6 sm:mr-3 sm:text-sm lg:text-lg">
        <h1 className="text-sm font-bold text-yellow-200 font-poppins sm:text-lg lg:text-2xl">
          {name}
        </h1>
        <h3 style={style} className="">
          {showMore ? about : about?.substring(0, 250) + '...'}
          <button
            className="font-semibold text-yellow-300 underline hover:text-blue-400"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </h3>
      </div>
    </div>
  );
}

export default PeopleDetails;

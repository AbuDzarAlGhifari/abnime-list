import Slider from 'react-slick';

export const SkeletonHero = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[500px] bg-gray-800 animate-pulse">
      {/* Slider Item Placeholder */}
      <div className="relative flex items-center w-full h-[400px] sm:h-[600px] bg-gray-900">
        {/* Text Content Placeholder */}
        <div className="relative z-10 flex flex-col justify-center w-full h-full px-6 md:w-2/3 md:px-16">
          {/* Title Placeholder */}
          <div className="w-2/3 h-8 mb-4 bg-gray-700 md:h-12"></div>
          {/* Metadata Placeholder */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="w-20 h-5 bg-gray-700"></div>
            <div className="w-24 h-5 bg-gray-700"></div>
            <div className="w-32 h-5 bg-gray-700"></div>
            <div className="h-5 bg-gray-700 w-28"></div>
            <div className="w-16 h-5 bg-gray-700"></div>
          </div>
          {/* Synopsis Placeholder */}
          <div className="w-full h-16 mb-6 bg-gray-700 md:h-20"></div>
          {/* Button Placeholder */}
          <div className="flex gap-4">
            <div className="w-32 h-10 bg-gray-700"></div>
          </div>
        </div>

        {/* Background Placeholder */}
        <div className="absolute top-0 bottom-0 right-0 w-full h-full bg-gray-800 md:w-2/3">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
    </div>
  );
};

export const SkeletonSeason = ({ settings }) => {
  return (
    <div className="mt-8 text-center text-white bg-red-950">
      <div className="flex items-center justify-between px-4 pt-4 text-xs font-semibold text-red-50 sm:px-6 lg:px-8 font-poppins">
        <h1 className="px-2 text-base capitalize border-l-4 border-red-700 sm:text-xl">
          Loading Season...
        </h1>
      </div>
      <div className="px-4 mt-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center animate-pulse"
            >
              <div className="h-48 mx-1 mb-4 bg-gray-600 rounded-lg sm:h-64 lg:h-72"></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export const SkeletonTop = () => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex overflow-hidden transition-all duration-500 bg-gray-800 rounded-md h-44"
        >
          <div className="flex-shrink-0 w-1/3 bg-gray-700 animate-pulse"></div>
          <div className="flex flex-col justify-between w-2/3 p-4">
            <div className="w-2/3 h-4 bg-gray-700 animate-pulse"></div>
            <div className="w-full h-3 mt-2 bg-gray-700 animate-pulse"></div>
            <div className="w-1/2 h-3 mt-2 bg-gray-700 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SkeletonUpcoming = () => {
  return (
    <div className="relative block overflow-hidden transition-transform transform scale-95 bg-gray-700 rounded-lg shadow-lg animate-pulse">
      {/* Skeleton Image */}
      <div className="w-full bg-gray-600 rounded-t-lg h-36 sm:h-64 lg:h-72"></div>

      {/* Skeleton Text */}
      <div className="p-3 text-center bg-gray-600 rounded-b-lg">
        <div className="w-3/4 h-4 mx-auto bg-gray-500 rounded"></div>
      </div>
    </div>
  );
};

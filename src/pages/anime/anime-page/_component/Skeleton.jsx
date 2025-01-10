export const SkeletonHero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] bg-gray-800 animate-pulse">
      {/* Text Section */}
      <div className="absolute z-10 flex flex-col justify-center w-full h-full px-6 md:w-2/3 md:px-16">
        <div className="w-2/3 h-8 mb-4 bg-gray-700 md:h-12"></div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="w-20 h-5 bg-gray-700"></div>
          <div className="w-24 h-5 bg-gray-700"></div>
          <div className="w-32 h-5 bg-gray-700"></div>
        </div>
        <div className="w-full h-16 mb-6 bg-gray-700 md:h-20"></div>
        <div className="flex gap-4">
          <div className="w-32 h-10 bg-gray-700"></div>
          <div className="w-32 h-10 bg-gray-700"></div>
        </div>
      </div>

      {/* Background Section */}
      <div className="absolute top-0 right-0 w-full h-full bg-gray-800 md:w-2/3"></div>
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

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Custom Next Arrow
export const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-30 flex items-center justify-center bg-black rounded-full cursor-pointer size-5 bg-opacity-40 md:size-8 top-1/2 right-2 md:right-4 hover:bg-red-700"
      onClick={onClick}
      style={{ transform: 'translateY(-50%)' }}
    >
      <IoIosArrowForward />
    </div>
  );
};

// Custom Prev Arrow
export const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-30 flex items-center justify-center bg-black rounded-full cursor-pointer size-5 bg-opacity-40 md:size-8 top-1/2 left-2 md:left-4 hover:bg-red-700"
      onClick={onClick}
      style={{ transform: 'translateY(-50%)' }}
    >
      <IoIosArrowBack />
    </div>
  );
};

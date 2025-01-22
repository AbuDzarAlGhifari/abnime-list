import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function PageNotFound() {
  const [time, setTime] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate(-1);
    }
  }, [time, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-yellow-400 font-extrabold text-[8rem] sm:text-[12rem] lg:text-[16rem] animate-pulse">
        404
      </div>

      <div className="space-y-4 text-center font-poppins">
        <h1 className="text-2xl font-bold sm:text-4xl lg:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl">
          Redirecting to the previous page in{' '}
          <span className="font-extrabold text-yellow-400">{time}</span> seconds
        </p>
      </div>

      <div className="absolute inset-0 z-[-1]">
        <div className="absolute w-[200px] h-[200px] bg-red-800 rounded-full blur-3xl opacity-50 top-10 left-10"></div>
        <div className="absolute w-[150px] h-[150px] bg-yellow-500 rounded-full blur-2xl opacity-40 bottom-10 right-10"></div>
      </div>
    </div>
  );
}

export default PageNotFound;

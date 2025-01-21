import CardSeason from '@/components/common/card/CardSeason';
import { getAnimeSeasonNow } from '@/services/animeService';
import { useQuery } from '@tanstack/react-query';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { SkeletonSeason } from './Skeleton';

const SeasonSection = () => {
  const {
    data: animeSeasonNow,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['animeSeasonNow'],
    queryFn: getAnimeSeasonNow,
    retry: 3,
    staleTime: 1000 * 60 * 15,
  });

  const season = animeSeasonNow?.[0]?.season || 'Unknown';
  const year = animeSeasonNow?.[0]?.year || 'Unknown';

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  if (isLoading) return <SkeletonSeason settings={sliderSettings} />;

  if (isError) {
    return (
      <div className="mt-8 text-center text-red-500">
        Error loading season anime
      </div>
    );
  }

  return (
    <div className="mt-32 bg-red-950 sm:mt-0">
      <div className="flex items-center justify-between px-4 pt-4 text-xs font-semibold text-red-50 sm:px-6 lg:px-8 font-poppins">
        <h1 className="px-2 text-base capitalize border-l-4 border-red-700 sm:text-xl">
          Airing {`${season} - ${year}`}
        </h1>
        <Link
          to="/season-now"
          className="flex items-center justify-center gap-1 px-2 py-1 text-xs italic bg-red-700 rounded-lg cursor-pointer hover:bg-orange-600 sm:text-sm"
        >
          View More <FaLongArrowAltRight />
        </Link>
      </div>

      <div className="px-4 mt-4 sm:px-6 lg:px-8">
        <Slider {...sliderSettings}>
          {animeSeasonNow?.map((anime) => (
            <CardSeason key={anime.mal_id} all={anime} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SeasonSection;

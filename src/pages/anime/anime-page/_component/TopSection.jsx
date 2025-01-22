import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAnimeTopData } from '@/services/animeService';
import CardTop from '@/components/common/card/CardTop';

const TopSection = () => {
  const [selectedTab, setSelectedTab] = useState('airing');
  const [itemsToShow, setItemsToShow] = useState(6);

  const {
    data: animeData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['animeData', selectedTab],
    queryFn: () => getAnimeTopData(selectedTab),
    enabled: !!selectedTab,
    staleTime: 1000 * 60 * 20,
    cacheTime: 1000 * 60 * 30,
  });

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setItemsToShow(6);
  };

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  return (
    <div className="px-4 py-6 sm:py-8 lg:py-10 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between text-xs font-semibold text-red-50 font-poppins">
        <h1 className="px-2 text-base capitalize border-l-4 border-red-700 sm:text-xl">
          Top Anime
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-md sm:justify-start">
          {['airing', 'upcoming', 'bypopularity', 'favorite'].map((tab) => (
            <button
              key={tab}
              className={`sm:py-1.5 py-0.5 px-1.5 sm:px-3 text-[9px] sm:text-sm font-semibold text-white rounded-md ${
                selectedTab === tab ? 'bg-red-900' : 'bg-red-700'
              } hover:bg-red-800 transition-all`}
              onClick={() => handleTabChange(tab)}
            >
              {tab === 'bypopularity'
                ? 'Popular'
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <CardTop
          animeData={animeData?.slice(0, itemsToShow)}
          isLoading={isLoading}
        />
        {animeData?.length > itemsToShow && (
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-red-950 to-transparent">
            <div className="flex items-center justify-center mt-20">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 font-bold text-red-600 transition-all cursor-pointer text-opacity-60 hover:text-yellow-500"
              >
                LOAD MORE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopSection;

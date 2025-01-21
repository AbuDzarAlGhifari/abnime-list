import React from 'react';
import { ErrorMessage, Loading } from '@/components/common/Status';
import SideGenre from '@/components/layout/SideGenre';
import { getAnimeChar, getAnimeDetail } from '@/services/animeService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import AdditionalSection from './_component/AdditionalSection';
import CharSection from './_component/CharSection';
import DetailSection from './_component/DetailSection';
import ScrollTopButton from '@/components/common/ScrollTopButton';

const DetailAnimePage = () => {
  const { id } = useParams();

  const {
    data: anime,
    isLoading: isAnimeLoading,
    isError: isAnimeError,
    error: animeError,
  } = useQuery({
    queryKey: ['animeDetail', id],
    queryFn: () => getAnimeDetail(id),
  });

  const {
    data: characters,
    isLoading: isCharLoading,
    isError: isCharError,
  } = useQuery({
    queryKey: ['animeCharacters', id],
    queryFn: () => getAnimeChar(id),
    enabled: !!id,
  });

  if (isAnimeLoading || isCharLoading) return <Loading />;
  if (isAnimeError) return <ErrorMessage />;
  if (isCharError) return <ErrorMessage />;
  // console.log(JSON.stringify(anime, null, 2));

  return (
    <div className="overflow-x-hidden text-white">
      <DetailSection anime={anime} />

      <AdditionalSection anime={anime} />

      {characters?.length > 0 ? (
        <CharSection characters={characters} />
      ) : (
        <div className="text-center text-gray-400">
          No characters available for this anime.
        </div>
      )}
      <div className="mt-4 sm:mx-6 sm:mt-0">
        <SideGenre />
      </div>

      {/* Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default DetailAnimePage;

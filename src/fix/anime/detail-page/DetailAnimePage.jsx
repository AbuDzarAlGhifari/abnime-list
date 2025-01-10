import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAnimeDetail, getAnimeChar } from '@/services/animeService';
import { useParams } from 'react-router-dom';
import DetailSection from './_component/DetailSection';
import CharSection from './_component/CharSection';

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen text-white">
    Loading...
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="flex items-center justify-center min-h-screen text-red-500">
    {message || 'Failed to fetch anime details.'}
  </div>
);

const DetailAnimePage = () => {
  const { id } = useParams();

  // Fetch Anime Detail
  const {
    data: anime,
    isLoading: isAnimeLoading,
    isError: isAnimeError,
    error: animeError,
  } = useQuery({
    queryKey: ['animeDetail', id],
    queryFn: () => getAnimeDetail(id),
  });

  // Fetch Characters
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
  if (isAnimeError) return <ErrorMessage message={animeError?.message} />;
  if (isCharError)
    return <ErrorMessage message="Failed to fetch characters." />;

  return (
    <div className="text-white">
      {/* Anime Detail */}
      <DetailSection anime={anime} />

      {/* Characters */}
      {characters?.length > 0 ? (
        <CharSection characters={characters} />
      ) : (
        <div className="text-center text-gray-400">
          No characters available for this anime.
        </div>
      )}
    </div>
  );
};

export default DetailAnimePage;

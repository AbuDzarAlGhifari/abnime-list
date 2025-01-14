import React, { useState } from 'react';
import SideGenre from '@/components/layout/SideGenre';
import SideRondomeChar from '@/components/layout/SideRondomeChar';
import HeroSection from './_component/HeroSection';
import SeasonSection from './_component/SeasonSection';
import TopSection from './_component/TopSection';
import UpcomingSection from './_component/UpcomingSection';
import ModalCharacter from '../detail-page/_component/ModalCharacter';

const AnimePage = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCloseModal = () => setSelectedCharacter(null);
  return (
    <div className="justify-center min-h-screen pb-4 overflow-x-hidden text-sm bg-red-950">
      {/* Hero Section */}
      <div className="pb-20">
        <HeroSection />
      </div>

      {/* Season Section */}
      <div className="mt-8">
        <SeasonSection />
      </div>

      {/* Top Section */}
      <TopSection />

      {/* Up Coming Section */}
      <div className="grid grid-cols-12">
        <div className="col-span-full sm:col-span-9">
          <UpcomingSection />
        </div>
        <div className="mt-4 space-y-4 sm:mt-0 col-span-full sm:col-span-3 sm:mr-8">
          <SideGenre />
          <SideRondomeChar onSelect={setSelectedCharacter} />
          <ModalCharacter
            selectedCharacter={selectedCharacter}
            onClose={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimePage;

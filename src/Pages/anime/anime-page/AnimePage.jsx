import React from 'react';
import HeroSection from './_component/HeroSection';
import SeasonSection from './_component/SeasonSection';
import TopSection from './_component/TopSection';
import UpcomingSection from './_component/UpcomingSection';
import SideGenre from '@/components/layout/SideGenre';
import SideRondomeChar from '@/components/layout/SideRondomeChar';

const AnimePage = () => {
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
        <div className="space-y-4 col-span-full sm:col-span-3 sm:mr-8">
          <SideGenre />
          <SideRondomeChar />
        </div>
      </div>
    </div>
  );
};

export default AnimePage;

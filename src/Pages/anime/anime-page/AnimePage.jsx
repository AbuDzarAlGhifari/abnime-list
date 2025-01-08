import React from 'react';
import HeroSection from './_component/HeroSection';
import PopularSection from './_component/PopularSection';
import UpcomingSection from './_component/UpcomingSection';

const AnimePage = () => {
  return (
    <div className="justify-center min-h-screen pb-4 text-sm bg-red-950">
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Section */}
      <PopularSection />

      {/* Upcoming Section */}
      <UpcomingSection />
    </div>
  );
};

export default AnimePage;

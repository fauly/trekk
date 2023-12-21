'use client';

import React, { useEffect, useState } from 'react';
import client from '../../sanity';
import { HeroSection } from '../types';

const HomePage: React.FC = () => {
  const [heroSection, setHeroSection] = useState<HeroSection | null>(null);

  useEffect(() => {
    client.fetch(`*[_type == "homePage"]`)
      .then((data: HeroSection[]) => setHeroSection(data[0]))
      .catch(console.error);
  }, []);

  if (!heroSection) return <div>Loading...</div>;

  return (
    <div>
      <h1>{heroSection.title}</h1>
    </div>
  );
};

export default HomePage;
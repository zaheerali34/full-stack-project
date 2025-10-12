import React from 'react';
import Home from '../Components/Home/Home';
import Card from '../Components/Home/Card';
import PriceCard from '../Components/Home/PriceCard';
import Templates from '../Components/Home/Templates';
import Section from '../Components/Home/Section';
import BgSection from '../Components/Home/BgSection';

function LandingPage() {
  return (
    <div>
      <Home />
      <Card />
      <PriceCard />
      <Templates />
      <Section />
      <BgSection />
    </div>
  );
}

export default LandingPage;

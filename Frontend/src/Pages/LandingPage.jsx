import React from 'react';
import Header from '../Layout/Header';
import Home from '../Components/Home/Home';
import Card from '../Components/Home/Card';
import PriceCard from '../Components/Home/PriceCard';
import Templates from '../Components/Home/Templates';
import Section from '../Components/Home/Section';
import BgSection from '../Components/Home/BgSection';
import Footer from '../Layout/Footer';

function LandingPage() {
  return (
    <div>
      <Header />
      <Home />
      <Card />
      <PriceCard />
      <Templates />
      <Section />
      <BgSection />
      <Footer />
    </div>
  );
}

export default LandingPage;

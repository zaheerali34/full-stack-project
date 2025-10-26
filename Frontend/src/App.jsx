import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import DesignPage from './Pages/DesignPage';
import PlanPage from './Pages/PlansPage';
import ProductPage from './Pages/ProductPage';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className="main font-[font1]">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/plans" element={<PlanPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

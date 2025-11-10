import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import DesignPage from './Pages/DesignPage';
import PlanPage from './Pages/PlansPage';
import ProductPage from './Pages/ProductPage';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import CanvaInterface from './Components/Dashboard/CanvaInterface';
import Signup from './Components/Auth/Signup';
import ProtectedRoute from './Components/Auth/ProtectedRoute';

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/signup', '/dashboard'];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <div className="main font-[font1]">
      {!shouldHideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/plans" element={<PlanPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <CanvaInterface />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

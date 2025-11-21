import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          'https://full-stack-project-3-gyov.onrender.com/',
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(data.status === true);
      } catch (error) {
        console.error('Verification error:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-xl">
          <img src="ripples.svg" alt="" className="w-full" />
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;

// src/Routes/PrivateRoute.jsx
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContext';
import { useUI } from '../Provider/UIContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { setShowLoginModal } = useUI();
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      setShowLoginModal(true);
    }
  }, [user, loading, setShowLoginModal]);

  if (loading) return <p className="text-center mt-10 text-blue-500">Loading...</p>;

  if (!user) return null; // Prevent rendering child or redirect

  return children;
};

export default PrivateRoute;

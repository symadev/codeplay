import { useState } from 'react';
import Login from './Login';     // Adjust path if needed
import SignUp from './SignUp';   // Import SignUp component (adjust path)
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContext';
import UseAuth from '../Provider/UseAuth';

const Navbar = () => {
  // Hover states for buttons
  const [isHovered, setIsHovered] = useState({ login: false, start: false });
  const {user, logOut} = UseAuth()

  // Modal visibility states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Functions to open/close modals
  const openLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const openRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const closeLogin = () => setShowLoginModal(false);
  const closeRegister = () => setShowRegisterModal(false);

 

  return (
    <nav className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-700 overflow-hidden">
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

      <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">⚡</span>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            CodePlay
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Login Button */}
        {/* Login Button (Shown when user is not logged in) */}
      {!user && (
        <button
          onClick={openLogin}
          onMouseEnter={() => setIsHovered({ ...isHovered, login: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, login: false })}
          className={`
            relative px-4 md:px-6 py-2 md:py-3 
            text-white font-semibold rounded-full
            border-2 border-white/30 backdrop-blur-sm
            transition-all duration-300 ease-in-out
            hover:border-white/50 hover:bg-white/10
            hover:-translate-y-1 hover:shadow-lg
            active:translate-y-0
            ${isHovered.login ? 'shadow-xl' : ''}
          `}
        >
          <span className="relative z-10">Login</span>
          {isHovered.login && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
          )}
        </button>
      )}

      {/* Logout Button (Shown when user is logged in) */}
      {user && (
        <button
          onClick={logOut}
          onMouseEnter={() => setIsHovered({ ...isHovered, logout: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, logout: false })}
          className={`
            relative px-4 md:px-6 py-2 md:py-3 
            text-white font-semibold rounded-full
            border-2 border-red-300/30 backdrop-blur-sm
            transition-all duration-300 ease-in-out
            hover:border-red-500 hover:bg-red-600/20
            hover:-translate-y-1 hover:shadow-lg
            active:translate-y-0
            ${isHovered.logout ? 'shadow-xl' : ''}
          `}
        >
          <span className="relative z-10">Logout</span>
          {isHovered.logout && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent animate-pulse rounded-full"></div>
          )}
        </button>
      )}

          {/* Start Playing Button */}
          <Link to='/game'
           
            onMouseEnter={() => setIsHovered({ ...isHovered, start: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, start: false })}
            className={`
              relative px-4 md:px-6 py-2 md:py-3 
              font-semibold rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-400
              text-blue-900 
              transition-all duration-300 ease-in-out
              hover:from-cyan-300 hover:to-blue-300
              hover:-translate-y-1 hover:shadow-2xl
              active:translate-y-0
              shadow-lg shadow-cyan-500/50
              ${isHovered.start ? 'shadow-2xl shadow-cyan-400/60' : ''}
            `}
          >
            <span className="relative z-10">Start Playing</span>
            {isHovered.start && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full"></div>
            )}
          </Link>
        </div>
      </div>

      {/* Login Modal */}
      <Login
        isOpen={showLoginModal}
        onRequestClose={closeLogin}
        openRegister={openRegister} // So Login modal can open Register modal
      />

      {/* Register Modal */}
      <SignUp
        isOpen={showRegisterModal}
        onRequestClose={closeRegister}
        openLogin={openLogin} // So Register modal can open Login modal
      />
    </nav>
  );
};

export default Navbar;

// src/Provider/UIContext.jsx
import { createContext, useContext, useState } from 'react';

// Create a Context for UI state
const UIContext = createContext();

// Context Provider Component
export const UIProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <UIContext.Provider value={{
      showLoginModal,
      setShowLoginModal,
      showRegisterModal,
      setShowRegisterModal
    }}>
      {children}
    </UIContext.Provider>
  );
};

// Custom hook to use UIContext easily
export const useUI = () => useContext(UIContext);

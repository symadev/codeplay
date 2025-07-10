// src/components/WinModal.jsx
import React, { useEffect } from "react";

const WinModal = ({ visible, onClose }) => {
  // Optional win sound
  useEffect(() => {
    if (visible) {
      const audio = new Audio("/public/audios/success.mp3");
      audio.play();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-yellow-900 via-yellow-800 to-orange-900 rounded-2xl p-10 w-[90%] max-w-lg shadow-2xl border border-yellow-500/30 text-center">
        
        {/* Sparkle glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-400/10 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-orange-200 animate-pulse mb-6">
            🎉 You Win! 🎉
          </h2>

          <div className="text-6xl mb-6 animate-bounce">🏆</div>

          <p className="text-yellow-100 mb-6 text-lg font-medium">
            Congratulations, champion! You reached the goal!
          </p>

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700 hover:shadow-lg transform hover:scale-[1.05] active:scale-[0.97]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#102542] text-white rounded-md shadow-md">
      {/* Left: Logo + Cog */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-extrabold text-cyan-400 tracking-wide">⚙️ CodePlay</h1>
      </div>

      {/* Right: Back to Home + Player */}
      <div className="flex items-center gap-4">
        {/* Back to Home Button */}
        <div
          className="px-4 md:px-6 py-2 md:py-3 
          font-semibold rounded-full
          bg-gradient-to-r from-cyan-400 to-blue-400
          text-white 
          transition-all duration-300 ease-in-out
          hover:from-cyan-300 hover:to-blue-300
          hover:-translate-y-1 hover:shadow-2xl
          active:translate-y-0
          shadow-lg shadow-cyan-500/50
          cursor-pointer"
        >
          <Link to="/" className="uppercase tracking-wide">Back to Home</Link>
        </div>

        {/* Player Badge */}
        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-black font-semibold flex items-center gap-2 shadow-md hover:scale-105 transition-transform duration-300">
          <FaStar className="text-yellow-700 animate-pulse" />
          <span className="uppercase tracking-wide">Player 1</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

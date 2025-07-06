import { FaCog, FaStar } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#102542] text-white rounded-md shadow-md">
      {/* Left: Settings icon */}
      <div className="flex items-center gap-2">
        <FaCog className="text-xl cursor-pointer hover:rotate-180 transition duration-300" />
        <h1 className="text-lg font-semibold">CodePlay</h1>
      </div>

      {/* Right: Badge Button */}
      <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold flex items-center gap-2 shadow">
        <FaStar />
        <span>Player 1</span>
      </div>
    </div>
  );
};

export default TopBar;

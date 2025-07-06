import React from "react";

const GRID_SIZE = 5;

const GameBoard = ({ robotPosition, goalPosition }) => {
  // ডিফল্ট ভ্যালু দিয়ে props নিরাপদ করা
  const robotPos = robotPosition ?? { x: -1, y: -1 };
  const goalPos = goalPosition ?? { x: -1, y: -1 };

  const rows = Array.from({ length: GRID_SIZE });
  const cols = Array.from({ length: GRID_SIZE });

  return (
    <div className="bg-blue-900 rounded-2xl p-4 shadow-xl w-[300px] h-[300px] grid grid-cols-5 grid-rows-5 gap-1">
      {rows.map((_, rowIdx) =>
        cols.map((_, colIdx) => {
          const isRobot = robotPos.x === colIdx && robotPos.y === rowIdx;
          const isGoal = goalPos.x === colIdx && goalPos.y === rowIdx;

          return (
            <div
              key={`${rowIdx}-${colIdx}`}
              className={`bg-blue-700 rounded-md flex justify-center items-center text-2xl select-none ${
                isRobot
                  ? "bg-yellow-400 text-black font-bold"
                  : isGoal
                  ? "bg-green-400 text-black font-bold"
                  : "bg-blue-700"
              }`}
            >
              {isRobot ? "🤖" : isGoal ? "🎯" : ""}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameBoard;

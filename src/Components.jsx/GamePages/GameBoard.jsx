import React from "react";

const GRID_SIZE = 5;

const GameBoard = ({ robotPosition, goalPosition }) => {
  // ডিফল্ট ভ্যালু দিয়ে props নিরাপদ করা
  const robotPos = robotPosition ?? { x: -1, y: -1 };
  const goalPos = goalPosition ?? { x: -1, y: -1 };

  const rows = Array.from({ length: GRID_SIZE });
  const cols = Array.from({ length: GRID_SIZE });
  // এটা দুইটা অ্যারে তৈরি করে, প্রতিটি ৫টা আইটেম নিয়ে, যাতে আমরা map() ব্যবহার করে বোর্ডের প্রতিটি ঘর তৈরি করতে পারি।

  return (
    <div className="bg-blue-900 rounded-2xl p-4 shadow-xl w-[300px] h-[300px] grid grid-cols-5 grid-rows-5 gap-1">

      {/* এখানে rows এবং cols এর মধ্যে map() করে ৫x৫ গ্রিড তৈরি করা হচ্ছে। প্রতিটি ঘরের জন্য:

rowIdx = কোন সারি (row) তে আছি

colIdx = কোন কলামে আছি */}



      {rows.map((_, rowIdx) =>
        cols.map((_, colIdx) => {
          const isRobot = robotPos.x === colIdx && robotPos.y === rowIdx;
          const isGoal = goalPos.x === colIdx && goalPos.y === rowIdx;
          // চেক করছে এই ঘরটি কি রোবটের জন্য? নাকি লক্ষ্যস্থলের জন্য?

          return (
            <div
              key={`${rowIdx}-${colIdx}`}
              className={`robot-cell rounded-md flex justify-center items-center text-2xl select-none ${isRobot
                  ? "bg-yellow-400 text-black font-bold scale-110"
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

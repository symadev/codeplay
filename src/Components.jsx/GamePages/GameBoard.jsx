
import robot from "../../assets/images/robot-main.png"
import trophy from "../../assets/images/trophy.png"

const GRID_SIZE = 5;

const GameBoard = ({ robotPosition, goalPosition }) => {
  const robotPos = robotPosition ?? { x: 0, y: 0 };
  const goalPos = goalPosition ?? { x: 4, y: 4 };

  const rows = Array.from({ length: GRID_SIZE });
  const cols = Array.from({ length: GRID_SIZE });

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-cyan-300 opacity-20 blur-2xl transform scale-110"></div>

        {/* Main straight game board */}
        <div
          className="relative bg-gradient-to-br from-blue-900 to-slate-900 backdrop-blur-sm border-2 border-cyan-400 shadow-3xl"
          style={{
            borderRadius: "24px",
            padding: "32px",
          }}
        >
          {/* Grid glow effect */}
          <div className="absolute inset-0 bg-cyan-400/10 blur-sm rounded-3xl"></div>

          {/* Grid container */}
          <div className="relative grid grid-cols-5 gap-3 p-6">
            {rows.map((_, rowIdx) =>
              cols.map((_, colIdx) => {
                const isRobot = robotPos.x === colIdx && robotPos.y === rowIdx;
                const isGoal = goalPos.x === colIdx && goalPos.y === rowIdx;

                return (
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    className={`
                      relative w-20 h-20 border-2 transition-all duration-300
                      ${isGoal
                        ? "bg-amber-600 shadow-lg"
                        : "bg-blue-800/30 border-cyan-400/60 hover:border-cyan-300"
                      }
                    `}
                    style={{
                      boxShadow: isGoal
                        ? "0 0 25px rgba(217, 119, 6, 0.6), 0 6px 12px rgba(0,0,0,0.3)"
                        : "0 0 15px rgba(6, 182, 212, 0.3), 0 4px 8px rgba(0,0,0,0.2)",
                      borderRadius: "8px",
                    }}
                  >
                    {/* Cell content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {isRobot ? (
                        <div className="relative w-16 h-16 flex items-center justify-center ">
                          <img
                            src={robot}
                            alt="Robot"
                            className="w-full h-full object-contain drop-shadow-md"
                          />
                        </div>
                      ) : isGoal ? (
                        <div className="relative w-12 h-12 flex items-center justify-center animate-pulse">
                          <img
                            src={trophy}
                            alt="Goal"
                            className="w-full h-full object-contain drop-shadow-lg"
                          />
                        </div>
                      ) : null}
                    </div>

                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
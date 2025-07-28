
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import TopBar from "./TopBar";
import GameBoard from "./GameBoard";
import CommandPanel from "./CommandPanel";
import FootPage from "./FootPage";
import QuizModal from "./QuizModal";
import UseAxiosPublic from "../../Provider/UseAxiosPublic";
import WinModal from "../GamePages/WinModal";

const GamePage = () => {
  const gridSize = 5;
  const [commands, setCommands] = useState([]);
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [goalPosition, setGoalPosition] = useState({ x: 4, y: 4 });
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [showWinModal, setShowWinModal] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const axiosPublic = UseAxiosPublic();

  const playSound = (path) => {
    const audio = new Audio(path);
    audio.currentTime = 0;
    audio.play();
  };

  const fetchQuiz = async () => {
    try {
      const res = await axiosPublic.get("/quiz");
      setQuizData(res.data);
      setShowQuiz(true);
    } catch (error) {
      console.error("Quiz fetch failed:", error);
    }
  };

  const runCommands = async () => {
    let pos = { ...robotPosition };

    for (let i = 0; i < commands.length; i++) {
      const cmd = commands[i];

      if (cmd === "move" && pos.y < 4) pos.y += 1;
      else if (cmd === "left" && pos.x > 0) pos.x -= 1;
      else if (cmd === "right" && pos.x < 4) pos.x += 1;
      else if (cmd === "move Back" && pos.y > 0) pos.y -= 1;

      playSound("/audios/move.mp3");

      const isNextToGoal =
        (Math.abs(pos.x - goalPosition.x) === 1 && pos.y === goalPosition.y) ||
        (Math.abs(pos.y - goalPosition.y) === 1 && pos.x === goalPosition.x);

      if (isNextToGoal) {
        setRobotPosition(pos);
        await new Promise((res) => setTimeout(res, 400));
        await fetchQuiz();
        return;
      }

      setRobotPosition({ ...pos });
      await new Promise((res) => setTimeout(res, 400));
    }

    if (pos.x === goalPosition.x && pos.y === goalPosition.y) {
      setShowWinModal(true);
    }
  };

  const handleClearAll = () => {
    let newRobot = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };

    let newGoal = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };

    while (newRobot.x === newGoal.x && newRobot.y === newGoal.y) {
      newGoal = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
    }

    setRobotPosition(newRobot);
    setGoalPosition(newGoal);
    setCommands([]);
    setShowQuiz(false);
    setShowWinModal(false);
    playSound("/audios/reset.mp3");
  };

  const handleQuizCorrect = () => {
    setWrongAttempts(0);
    setShowQuiz(false);
    setRobotPosition(goalPosition);
    setTimeout(() => setShowWinModal(true), 500);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#0a1a2f] text-white p-4 flex flex-col gap-6">
        <TopBar />

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <GameBoard robotPosition={robotPosition} goalPosition={goalPosition} />
          <CommandPanel commands={commands} setCommands={setCommands} />
        </div>

        <div className="flex justify-center gap-6 mt-6">
  {/* Run Button */}
  <button
    onClick={runCommands}
    className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-indigo-500/30 hover:shadow-indigo-500/50"
  >
     Run 
  </button>

  {/* Clear Button */}
  <button
    onClick={handleClearAll}
    className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-pink-500/30 hover:shadow-pink-500/50"
  >
     Clear All
  </button>
</div>


        <FootPage />

        {showQuiz && quizData && (
          <QuizModal
            visible={showQuiz}
            onClose={() => setShowQuiz(false)}
            quizData={quizData}
            onAnswerCorrect={handleQuizCorrect}
            onAnswerWrong={() => {
              setWrongAttempts((prev) => {
                const newCount = prev + 1;
                if (newCount >= 2) {
                  handleClearAll();
                  return 0;
                }
                return newCount;
              });
            }}
          />
        )}

        {showWinModal && (
          <WinModal
            visible={showWinModal}
            onClose={() => setShowWinModal(false)}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default GamePage;
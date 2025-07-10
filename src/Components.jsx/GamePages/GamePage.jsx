// src/GamePage.jsx
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import TopBar from "./TopBar";
import GameBoard from "./GameBoard";
import CommandPanel from "./CommandPanel";
import FootPage from "./FootPage";
import QuizModal from "./QuizModal";
import UseAxiosPublic from "../../Provider/UseAxiosPublic";

const GamePage = () => {
  const gridSize = 5;
  const [commands, setCommands] = useState([]);


  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [goalPosition, setGoalPosition] = useState({ x: 4, y: 4 }); // initially fixed

  const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState(null);

  const axiosPublic = UseAxiosPublic();


  // 🔊 Sound Play Function
  const playSound = (path) => {
    const audio = new Audio(path);
    audio.currentTime = 0;
    audio.play();
  };

  // 📥 Load quiz before reaching goal
  const fetchQuiz = async () => {
    try {
      const res = await axiosPublic.get("/quiz");
      console.log("Quiz received:", res.data);
      setQuizData(res.data);
      setShowQuiz(true);
    } catch (error) {
      console.error("Quiz fetch failed:", error);
    }
  };

  // ▶️ Run robot based on commands
  const runCommands = async () => {
    let pos = { ...robotPosition };

    for (let i = 0; i < commands.length; i++) {
      const cmd = commands[i];

      if (cmd === "move" && pos.y < 4) pos.y += 1;
      else if (cmd === "left" && pos.x > 0) pos.x -= 1;
      else if (cmd === "right" && pos.x < 4) pos.x += 1;
      else if (cmd === "move Back" && pos.y > 0) pos.y -= 1;

      // 🔊 Play move sound
      playSound("/public/audios/move.mp3");

      // 🧠 Show quiz before goal
      if (pos.x === goalPosition.x && pos.y === goalPosition.y - 1) {
        await fetchQuiz();
        break;
      }

      // Update robot position
      setRobotPosition({ ...pos });

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  };

  // 🔁 Reset all commands and robot
  const handleClearAll = () => {
    let newRobot = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };

    let newGoal = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };

    // 🔁 Keep generating until they are not the same
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
    playSound('/sounds/reset.mp3');
  };

  // ✅ Answered quiz correctly
  const handleQuizCorrect = () => {
    setShowQuiz(false);
    setRobotPosition(goalPosition);
    playSound("/public/audios/success.mp3");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#0a1a2f] text-white p-4 flex flex-col gap-6">
        <TopBar />

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <GameBoard
            robotPosition={robotPosition}
            goalPosition={goalPosition}
          />
          <CommandPanel commands={commands} setCommands={setCommands} />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={runCommands}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
          >
            Run
          </button>

          <button
            onClick={handleClearAll}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white"
          >
            Clear All
          </button>
        </div>

        <FootPage />

        {/* Quiz Modal */}
        {showQuiz && quizData && (
          <QuizModal
            visible={showQuiz}
            onClose={() => setShowQuiz(false)}
            quizData={quizData}
            onAnswerCorrect={handleQuizCorrect}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default GamePage;

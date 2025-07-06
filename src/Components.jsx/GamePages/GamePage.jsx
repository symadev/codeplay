import React, { useState } from "react";
import CommandPanel from "./CommandPanel";
import FootPage from "./FootPage";
import GameBoard from "./GameBoard";
import TopBar from "./TopBar";




const GamePage = () => {

  const [commands, setCommands] = useState([]);

  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white p-4 flex flex-col gap-6">
      <TopBar />

      <div className="flex flex-col md:flex-row justify-between gap-6">
      <GameBoard robotPosition={{ x: 0, y: 0 }} goalPosition={{ x: 4, y: 4 }} />

     
<CommandPanel commands={commands} setCommands={setCommands} />
      </div>

      <FootPage />
    </div>
  );
};

export default GamePage;

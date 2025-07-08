// src/components/CommandPanel.jsx
import React from "react";
import { useDrop } from "react-dnd";
import CommandItem from "../GamePages/Commands/CommandItem";

const availableCommands = [
  { id: "move", label: "Move Forward" },
  { id: "left", label: "Turn Left" },
  { id: "right", label: "Turn Right" },
  { id: "move Back", label: "Move Backward" },
];

const CommandPanel = ({ commands, setCommands }) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "COMMAND",
    drop: (item) => {
      setCommands((prev) => [...prev, item.id]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const removeCommand = (index) => {
    const newCommands = [...commands];
    newCommands.splice(index, 1);
    setCommands(newCommands);
  };

  return (
    <div className="bg-blue-800 rounded-xl p-4 w-[250px] text-white flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-2">Commands Panel</h2>

      {/* Draggable Commands */}
      <div className="grid grid-cols-1 gap-2">
        {availableCommands.map((cmd) => (
          <CommandItem key={cmd.id} command={cmd} />
        ))}
      </div>

      <hr className="border-blue-600 my-3" />

      {/* Drop Area */}
      <div
        ref={dropRef}
        className={`min-h-[120px] p-2 rounded border-2 border-dashed ${
          isOver ? "border-green-400 bg-blue-700" : "border-blue-600 bg-blue-900"
        }`}
      >
        <h3 className="font-semibold mb-1">Command Queue:</h3>
        {commands.length === 0 && (
          <p className="italic text-gray-300">Drop commands here...</p>
        )}

        <ul className="space-y-1 max-h-40 overflow-y-auto">
          {commands.map((cmd, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-blue-700 rounded px-2 py-1"
            >
              <span>{cmd}</span>
              <button
                onClick={() => removeCommand(idx)}
                className="text-red-400 hover:text-red-600 font-bold"
                title="Remove Command"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPanel;

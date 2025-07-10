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
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 w-[280px] text-white shadow-2xl border border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">🤖</span>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Command</h2>
          <p className="text-xs text-slate-400">Robot Turn to Pone</p>
        </div>
      </div>

      <p className="text-sm text-slate-300 mb-4">
        You're new lighting level light move goals.
      </p>

      {/* Robot Command Section */}
      <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🤖</span>
          </div>
          <span className="text-sm font-semibold text-white">Robot Command</span>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-slate-300 mb-2">Command</div>
          
          {/* Available Commands */}
          <div className="grid grid-cols-1 gap-2 mb-4">
            {availableCommands.map((cmd) => (
              <CommandItem key={cmd.id} command={cmd} />
            ))}
          </div>
        </div>
      </div>

      {/* Command Queue Drop Area */}
      <div
        ref={dropRef}
        className={`min-h-[100px] p-4 rounded-xl border-2 border-dashed transition-all duration-200 ${
          isOver 
            ? "border-orange-400 bg-orange-500/10" 
            : "border-slate-600 bg-slate-800/50"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-300">Queue</span>
          <div className="flex items-center gap-2">
            <button className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {commands.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-slate-500 text-sm italic">Drop commands here...</p>
          </div>
        ) : (
          <ul className="space-y-2 max-h-32 overflow-y-auto">
            {commands.map((cmd, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-slate-700 rounded-lg px-3 py-2 text-sm hover:bg-slate-600 transition-colors"
              >
                <span className="text-white">{cmd}</span>
                <button
                  onClick={() => removeCommand(idx)}
                  className="text-red-400 hover:text-red-300 font-bold text-lg leading-none transition-colors"
                  title="Remove Command"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
            <span className="text-white text-sm font-bold">×</span>
          </button>
          <span className="text-sm text-slate-300">{commands.length}</span>
        </div>
        
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
          You Won!
        </button>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default CommandPanel;
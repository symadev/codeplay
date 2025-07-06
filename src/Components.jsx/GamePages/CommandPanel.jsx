
import React from "react";

const CommandPanel = ({ commands, setCommands }) => {
  // কমান্ড লিস্ট (তুমি চাইলে Loop কে আলাদা লজিক দিতে পারো পরে)
  const availableCommands = [
    { id: "move", label: "Move Forward" },
    { id: "left", label: "Turn Left" },
    { id: "right", label: "Turn Right" },
    { id: "loop", label: "Loop (Repeat)" },
  ];

  const addCommand = (cmd) => {
    setCommands([...commands, cmd]);
  };

  const removeCommand = (index) => {
    const newCommands = [...commands];
    newCommands.splice(index, 1);
    setCommands(newCommands);
  };

  return (
    <div className="bg-blue-800 rounded-xl p-4 w-[250px] text-white flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-2">Commands Panel</h2>

      <div className="flex flex-col gap-2">
        {availableCommands.map((cmd) => (
          <button
            key={cmd.id}
            onClick={() => addCommand(cmd.id)}
            className="bg-blue-600 hover:bg-blue-500 rounded-md py-2 font-medium"
          >
            {cmd.label}
          </button>
        ))}
      </div>

      <hr className="border-blue-600 my-3" />

      <div>
        <h3 className="font-semibold mb-1">Commands List:</h3>
        {commands.length === 0 && <p className="italic">No commands added yet.</p>}

        <ul className="list-disc list-inside space-y-1 max-h-40 overflow-y-auto">
          {commands.map((cmd, idx) => (
            <li key={idx} className="flex justify-between items-center bg-blue-700 rounded px-2 py-1">
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

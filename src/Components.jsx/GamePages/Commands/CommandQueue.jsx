import { useDrop } from 'react-dnd';

const CommandQueue = ({ commands, setCommands }) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'COMMAND',
    drop: (item) => {
      setCommands((prev) => [...prev, item.command]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className={`min-h-[100px] p-4 border-2 border-dashed rounded-md ${
        isOver ? 'bg-green-100' : 'bg-white'
      }`}
    >
      <h3 className="text-lg font-bold mb-2">Command Queue:</h3>
      <ul className="space-y-2">
        {commands.map((cmd, index) => (
          <li key={index} className="bg-gray-200 p-2 rounded-md shadow">
            {cmd}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandQueue;

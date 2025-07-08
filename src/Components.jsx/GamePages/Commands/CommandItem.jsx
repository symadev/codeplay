// src/components/CommandItem.jsx
import { useDrag } from "react-dnd";

const CommandItem = ({ command }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "COMMAND",
    item: { id: command.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={`bg-blue-600 text-white p-2 rounded-md text-center cursor-move font-semibold ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {command.label}
    </div>
  );
};

export default CommandItem;

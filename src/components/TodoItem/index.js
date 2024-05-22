import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const TodoItem = ({ todo }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: todo.id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      key={todo.id}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-[#ffffff] w-[90%] h-[100px] my-2 mx-4 p-3 flex flex-col rounded-lg cursor-pointer justify-center"
    >
      <p>{todo.todo}</p>
    </div>
  );
};

export default TodoItem;

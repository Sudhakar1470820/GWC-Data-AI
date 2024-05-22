import TodoItem from "../TodoItem";
import { useDroppable } from "@dnd-kit/core";

const TodoList = ({ todos, statuslist }) => {
  const { setNodeRef } = useDroppable({
    id: statuslist,
  });
  return (
    <div
      ref={setNodeRef}
      key={statuslist}
      className="flex flex-col bg-[#f1f2f4] w-[350px] h-[700px] text-center rounded-lg pt-3"
    >
      <h2 className="text-3xl font-bold capitalize mb-2 ">{statuslist}</h2>
      <div className="max-h-[700px] overflow-auto">
        {todos?.[statuslist].map((list) => {
          return <TodoItem key={list.id} todo={list} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;

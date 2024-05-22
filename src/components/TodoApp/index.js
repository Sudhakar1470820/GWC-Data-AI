import React, { useState } from "react";
import TodoList from "../TodoList";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const TodoApp = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [todos, setTodos] = useState({
    todo: [
      {
        id: 1,
        todo: "Do something nice for someone I care about",
        completed: true,
        userId: 26,
      },
      {
        id: 2,
        todo: "Memorize the fifty states and their capitals",
        completed: false,
        userId: 48,
      },
      { id: 3, todo: "Watch a classic movie", completed: false, userId: 4 },
      {
        id: 4,
        todo: "Contribute code or a monetary donation to an open-source software project",
        completed: false,
        userId: 48,
      },
    ],
    inProgress: [
      {
        id: 5,
        todo: "Do something nice for someone I care about",
        completed: true,
        userId: 26,
      },
      {
        id: 6,
        todo: "Memorize the fifty states and their capitals",
        completed: false,
        userId: 48,
      },
    ],
    done: [
      {
        id: 9,
        todo: "Do something nice for someone I care about",
        completed: true,
        userId: 26,
      },
      {
        id: 10,
        todo: "Memorize the fifty states and their capitals",
        completed: false,
        userId: 48,
      },
      { id: 11, todo: "Watch a classic movie", completed: false, userId: 4 },
    ],
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      return;
    }
    if (active.id !== over.id) {
      const activeColumn = Object.keys(todos).find((column) =>
        todos[column].find((item) => item.id === active.id)
      );

      const overColumn = over.id;
      const activeIndex = todos[activeColumn].findIndex(
        (item) => item.id === active.id
      );
      const overIndex = todos[overColumn].findIndex(
        (item) => item.id === over.id
      );
      if (activeColumn !== overColumn) {
        const newActiveColumn = [...todos[activeColumn]];
        const [movedItem] = newActiveColumn.splice(activeIndex, 1);

        const newOverColumn = [...todos[overColumn]];
        newOverColumn.splice(overIndex, 0, movedItem);

        setTodos({
          ...todos,
          [activeColumn]: newActiveColumn,
          [overColumn]: newOverColumn,
        });
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="pt-10 flex md:flex-row flex-col  gap-5 md:gap-10 lg:gap-20 justify-center items-center">
        {Object.keys(todos).map((statuslist) => (
          <TodoList todos={todos} statuslist={statuslist} key={statuslist} />
        ))}
      </div>
    </DndContext>
  );
};

export default TodoApp;

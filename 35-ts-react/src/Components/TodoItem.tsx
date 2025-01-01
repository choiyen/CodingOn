import React from "react";
import { TodoItemType } from "../commonTypes";
interface Props {
  todo: TodoItemType;
  toggleComplete: (targetId: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}

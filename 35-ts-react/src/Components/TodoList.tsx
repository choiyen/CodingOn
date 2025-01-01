import React, { useState, useRef } from "react";
import { TodoItemType } from "../commonTypes";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, Settodos] = useState<TodoItemType[]>([]); //전체 투두 목록
  const [newtodo, setNewTodo] = useState(""); //새로 추가될 투두 하나
  // const inputRef = useRef(null);
  //useRef<null>(initialValue: null): React.MutableRefObject<null> (+2 overloads)
  //아무데나 넣어도 동작함(변경이 가능하다는 의미)
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updateTodos = [
      ...todos,
      { id: Date.now(), text: newtodo, completed: false },
    ];
    Settodos(updateTodos);
    setNewTodo("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") addTodo();
  };
  //해당하는 DOM객체만을 인식함.

  //focus 효과 (useRef 사용)
  const focusInput = () => {
    inputRef.current?.focus(); // null 일 수 있기 때문에 ? 추가
  };

  //투두 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    Settodos(updatedTodos);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <div>
        완료 개수 : {todos.filter((todo) => todo.completed === true).length}
      </div>
      <div>
        <input
          type="text"
          placeholder="todo"
          ref={inputRef}
          value={newtodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={focusInput}>Focus</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}

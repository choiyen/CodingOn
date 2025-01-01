import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./Components/Student";
import TodoList from "./Components/TodoList";
import FakePosts from "./Components/FakePosts";

function App() {
  const handleClick = (name: string, grade: number, score: number) => {
    console.log(`안녕 내 이름은 ${name}이고, ${grade} 학년, 점수는 ${score}`);
  };
  return (
    <div className="App">
      <Student name="코딩온" grade={3} part="CS" handleClick={handleClick} />
      <Student name="코디" grade={1} handleClick={handleClick} />
      <br />
      <br />
      <hr />
      <TodoList />
      <br />
      <br />
      <hr />
      <FakePosts />
    </div>
  );
}

export default App;

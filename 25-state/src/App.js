import "./App.css";
import Counter from "./Counter";
import SayFuntion from "./SayFuntion";

function App() {
  return (
    <div className="App">
      {/* 클래스형 State */}
      <Counter></Counter>
      <hr />
      <SayFuntion></SayFuntion>
    </div>
  );
}

export default App;

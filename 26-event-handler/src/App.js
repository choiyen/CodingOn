import "./App.css";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <ClassBind />
      <Counter />
    </div>
  );
}

export default App;

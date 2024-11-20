import "./App.css";
import Color from "./components/Color";
import HandlerEx from "./components/HandlerEx";
import Visblie from "./components/Visblie";
import Ex2 from "./components/Ex2";
import Ex4 from "./components/Ex4";
import { useState } from "react";
import Handler from "./components/Handler";

function App() {
  const [color, setColor] = useState({
    backcolor: "black",
    color: "white",
    img: "apple.jpeg",
    text: "text",
  });
  return (
    <div className="App">
      {/* <HandlerEx></HandlerEx>
      <Color></Color>
      <Visblie></Visblie>
      <Ex2></Ex2> */}
      <Ex4 color={color} setColor={setColor}></Ex4>
      <Handler color={color}></Handler>
    </div>
  );
}

export default App;

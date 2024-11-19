import logo from "./logo.svg";
import "./App.css";
import FoodComponent from "./FoodComponent";
import FunctionComponent from "./FunctionComponent";
import TextComponent from "./TextComponent";

function App() {
  function valid() {
    console.log("콘솔 띄우기 성공");
  }
  return (
    <div className="App">
      <FunctionComponent
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <TextComponent text="나는야 최고입니다" valid={valid}></TextComponent>
      <TextComponent valid={valid}></TextComponent>
    </div>
  );
}

export default App;

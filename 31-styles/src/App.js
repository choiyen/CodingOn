import CssModuleComponent from "./CssModuleComponent";
import SassComponent from "./SassComponent";
import StyledComponent from "./StyledComponent";
import StylePri from "./StylePri";
import StylePri2 from "./StylePri2";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>React Styling</h1>
      <h2>CssModuleComponent</h2>
      <CssModuleComponent></CssModuleComponent>
      <h2>SASS</h2>
      <SassComponent></SassComponent>
      <h2>예제 문제</h2>
      <StylePri></StylePri> */}
      <h2>예제 문제 2</h2>
      <br />
      <br />
      <br />
      <hr />
      <StylePri2></StylePri2>
      <br />
      <br />
      <br />
      <h1>Component</h1>
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;

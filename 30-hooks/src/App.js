import "./App.css";
import Faq from "./Faq";
import Form from "./Form";
import Form2 from "./Form2";
import UseCallback2 from "./UseCallback2";
import UseCallbackEx1 from "./UseCallbackEx1";
import UseCallbackPri from "./UseCallbackPri";
import UseMemoEx from "./UseMemoEx";
import UseMemoPri from "./UseMemoPri";
import UseReducerEx from "./UseReducerEx";

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx></UseMemoEx> */}
      <br />
      {/* <UseCallbackEx1></UseCallbackEx1> */}
      <br />
      {/* <UseCallback2 postId={9}></UseCallback2> */}
      {/* <UseMemoPri></UseMemoPri> */}
      <UseCallbackPri></UseCallbackPri>
      <hr />
      <UseReducerEx></UseReducerEx>
      <hr />
      <Faq></Faq>
      <hr />
      <Form></Form>
      <hr />
      <br />
      <br />
      <Form2></Form2>
    </div>
  );
}

export default App;

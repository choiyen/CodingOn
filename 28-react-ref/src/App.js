import "./App.css";
import RefClass1 from "./components/RefClass1";
import RefClass2 from "./components/RefClass2";
import RefFuntion1 from "./components/RefFuntion1";
import RefFuntion2 from "./components/RefFuntion2";
import Table from "./components/Table";
import Tables from "./components/Tables";

function App() {
  return (
    <div className="App">
      {/* <RefClass1></RefClass1> */}
      <RefClass2></RefClass2>
      <Table></Table>
      <RefFuntion1></RefFuntion1>
      <RefFuntion2></RefFuntion2>
      <Tables></Tables>
    </div>
  );
}

export default App;

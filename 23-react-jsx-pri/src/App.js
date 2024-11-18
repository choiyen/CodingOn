import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "로이";
  const animal = "강아지";
  let a = 7;
  let b = 5;
  const tile1 = {
    backgroundColor: "yellow",
    fontSize: "24px",
  };
  return (
    <div className="App">
      <h2> 제 반려 동물의 이름은 {name} 입니다.</h2>
      <h2>
        {name}는 {animal} 입니다.
      </h2>
      <div>{3 + 5 === 8 ? "정답입니다." : "오답입니다.!"} </div>
      <div>{a > b && "a가 b보다 큽니다."}</div>

      <div>
        <h1 className="title"> Hello World</h1>
        <label htmlFor="user">아이디</label>
        <input type="text" id="user" />
        <br />
        <label htmlFor="user">비밀번호</label>
        <input type="text" id="pw" />
      </div>
      <div>
        <h1 style={tile1}> Hello World</h1>
        <label htmlFor="user">아이디</label>
        <input type="text" id="user" />
        <br />
        <label htmlFor="user">비밀번호</label>
        <input type="text" id="pw" />
      </div>
    </div>
  );
}

export default App;

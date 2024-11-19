import logo from "./logo.svg";
import "./App.css"; // 이런식으로 src에 넣어서 씀.

function App() {
  const name = "dddd";
  const student = "KDT14";
  const style = {
    backgroundColor: "yellow",
    fontSize: "24px",
  };
  return (
    <>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React.js</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* JSX 문법 */}
        {/* 1. 하나로 감싸인 요소  */}
        {/* 2. JavaScript 표현식 사용  */}
        {/* - {}로 감싸면 js 표현식 사용 가능  */}
        {/* - {}에서 삼향연산자, 단축 평가 등 사용 가능*/}
      </div>
      <div> {name} 안녕? </div>
      <div>{student === "KDT14" ? "kdt14기 수강생이군요." : "누구세요?"} </div>
      {/* 3. style 속성
        - 리엑트에서 돔 요소에 스타일 적용 시 문자열 X -> 객체 사용
        - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성
      */}
      <div style={{ backgroundColor: "blue", fontSize: "24px" }}>하이</div>
      <div style={style}> ddddd</div>
      {/* 4. className 사용
          - class -> className 
         */}
      {/* 5. 종료 테그가 없는 테그의 사용
            - 기존의 종료 테그가 없는 테그를 사용하더라도 종료 테그를 작성해야 함 or self-closing
            - 잘못된 예 ) <input>, <br>
            - 올바른 예 ) <input/>, <br/>
         */}
      {/* 6. 주석
         - // : jsx 외부 주석
        
         */}
    </>
  );
}

export default App;

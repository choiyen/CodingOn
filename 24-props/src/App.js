// import logo from "./logo.svg";
// import "./App.css";
import Box from "./Box";
import Button from "./Button";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import PageLayout from "./PageLayout.jsx";
import Pr2 from "./Pr2";
import Pr3 from "./Pr3";

function App() {
  const my_func = () => {
    console.log("콘솔 띄우기 성공!");
  };
  return (
    <div className="App">
      <FunctionComponent name="새싹" />
      <FunctionComponent />
      <hr />

      <ClassComponent name="새싹" />
      <ClassComponent />
      <hr />

      <Button link="https://www.google.com">Google</Button>
      <hr />

      <Pr2 />
      <Pr3 valid={my_func} />
      <hr />

      <Box>
        <h1>이건 children으로 들어간 콘텐츠!</h1>
        <p>react children은 컴포넌트 안에 들어가는 모든 콘텐츠</p>
      </Box>
      <Box>
        <h1>이건 children으로 들어간 콘텐츠!</h1>
        <p>react children은 컴포넌트 안에 들어가는 모든 콘텐츠</p>
      </Box>

      <hr />
      <PageLayout>
        <h2>홈 페이지 콘텐츠</h2>
        <p>여기는 홈 페이지</p>
        <Box>
          <h1>이건 children으로 들어간 콘텐츠!</h1>
          <p>react children은 컴포넌트 안에 들어가는 모든 콘텐츠</p>
        </Box>
      </PageLayout>
    </div>
  );
}

export default App;

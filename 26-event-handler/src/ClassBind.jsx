import React, { Component } from "react";

export default class ClassBind extends Component {
  state = {
    name: "Codingon",
  };
  printConsole = () => {
    console.log("this", this);
    console.log("name", this.state.name);
  };

  printConsole2() {
    console.log("this", this);
    console.log("name", this.state.name);
  }

  //인자 전달 -> 이벤트 객체 사용하는 경우
  printConsole3 = (msg) => {
    console.log(msg);
  };

  printConsole4 = (e, msg) => {
    console.log(e);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event </h1>
        <button onClick={this.printConsole}>printConsole(인자X)</button>
        <button onClick={this.printConsole2.bind(this)}>
          printConsole2(인자X)
        </button>
        {/* 함수에 인자를 넘기는 방법. */}
        <button onClick={() => this.printConsole3("안녕")}>
          printConsole2(인자0)
        </button>
        <button onClick={(e) => this.printConsole4(e, "안녕")}>
          printConsole2(인자0)
        </button>
      </div>
    );
  }
}

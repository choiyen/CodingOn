import React, { Component, createRef } from "react";

export default class RefClass1 extends Component {
  //createRef를 사용해서 만들 때는 컴포넌트 내부에서 변수에 React.createRef()라는 걸 담아줘야 함.
  myInput = createRef();

  handleFocus = () => {
    //DOM 요소 선택 시 this.myInput.current까지 접근해야 함.
    this.myInput.current.focus();
  };
  render() {
    return (
      <div>
        <p>(클래스형 컴포넌트)버튼 클릭 시 input에 focus 처리</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

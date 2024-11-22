import React, { Component } from "react";

export default class RefClass1 extends Component {
  handleFocus = () => {
    console.log(this);
    this.myInput.focus();
  };
  render() {
    return (
      <div>
        <p>(클래스형 컴포넌트)버튼 클릭 시 input에 focus 처리</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

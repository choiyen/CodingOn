import React, { Component } from "react";

export default class LifeCycleClassChild extends Component {
  componentDidMount() {
    console.log("컴포넌트 마운트!");
  }
  componentDidUpdate() {
    console.log("컴포넌트 업데이트!"); //컴포넌트가 업데이트 될 때마다 실행
  }
  componentWillUnmount() {
    console.log("컴포넌트 언마운트");
  }

  render() {
    return <div>현재 number 값은 : {this.props.number}</div>;
  }
}

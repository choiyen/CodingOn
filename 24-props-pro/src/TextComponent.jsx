import React, { Component } from "react";
import PropTypes from "prop-types"; //타입 지정을 위해 필요

export default class TextComponent extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <div>{text}</div>
        <button onClick={valid}>클릭</button>
      </div>
    );
  }

  static defaultProps = {
    text: "이건 기본 text props 입니다.",
  };
  static propTypes = {
    name: PropTypes.string,
  };
}

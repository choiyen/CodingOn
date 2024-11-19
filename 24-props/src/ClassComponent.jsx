import { Component } from "react";
import PropTypes from "prop-types"; //타입 지정을 위해 필요

export default class ClassComponent extends Component {
  render() {
    const student = "길동";
    const { name } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{this.props.name}</div>
      </div>
    );
  }
  static defaultProps = {
    name: "시간을 달려",
  };
  static propTypes = {
    name: PropTypes.number,
  };
}

ClassComponent.defaultProps = {
  name: "철수",
};
ClassComponent.propTypes = {
  name: PropTypes.number.isRequired,
};

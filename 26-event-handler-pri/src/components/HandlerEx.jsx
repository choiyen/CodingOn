import React, { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    string: "Hello World",
  };

  render() {
    const { string } = this.state;
    const setString = (name) => {
      this.setState({ string: name });
    };
    return (
      <div>
        <h1>{string}</h1>
        <button onClick={() => setString("Goodbye World!")}>변경</button>
      </div>
    );
  }
}

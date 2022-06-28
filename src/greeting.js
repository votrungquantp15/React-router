// greeting.js
import React from "react";
import { ReactDOM } from "react";
class Greeting extends React.Component {
  // xay dung phuong thuc de tra ve JSX cua components
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div style={mystyle}>
        <h3>Hello my: {this.props.fullName}</h3>
      </div>
    );
  }
}

Greeting.defaultProps = { fullName: "HI YOU!" };

export default Greeting;

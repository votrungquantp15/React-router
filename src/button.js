// button.js
import React from "react";

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Please click me!",
      clickCount: 0,
    };
  }

  //Method updateCount()
  updateCount() {
    this.setState((prevState, props) => {
      return {
        clickCount: prevState.clickCount + 1,
        text: "Clicked",
      };
    });
  }
  render() {
    return (
      <button onClick={() => this.updateCount()}>
        {this.state.text} : {this.state.clickCount}
      </button>
    );
  }
}

export default MyButton;

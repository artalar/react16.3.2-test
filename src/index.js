import React from "react";
import { render } from "react-dom";
import { Tree } from "./Tree";

const COLORS = ["red", "green", "blue"];

const getNextIndex = currenIndex =>
  currenIndex < COLORS.length - 1 ? currenIndex + 1 : 0;

class App extends React.Component {
  state = { colorIndex: 0 };
  render() {
    window.start = Date.now();
    return (
      <div>
        <button
          onClick={() =>
            this.setState(state => ({ colorIndex: getNextIndex(state.colorIndex) }))
          }
        >
          Update
        </button>
        <Tree deep={50} color={COLORS[this.state.colorIndex]} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

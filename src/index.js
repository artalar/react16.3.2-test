import React from 'react';
import { render } from 'react-dom';
import styled from "styled-components";
import { Tree } from './Tree';

const COLORS = ['red', 'green', 'blue'];

const DEFAULT_ELEMENTS = 30;

const getNextIndex = currenIndex => (currenIndex < COLORS.length - 1 ? currenIndex + 1 : 0);

const Button = styled.button`
  margin: 0.5rem;
`;

class App extends React.Component {
  state = { elements: DEFAULT_ELEMENTS, colorIndex: 0, testId: null };

  handleUpdate = () => this.setState(state => ({ colorIndex: getNextIndex(state.colorIndex) }));

  handleStartTest = () => this.setState({ testId: setInterval(this.handleUpdate, 1000) });

  handleStopTest = () => {
    clearInterval(this.state.testId);
    this.setState({ testId: null });
  };

  render() {
    window.timeStartTest = Date.now();
    const { elements, colorIndex, testId } = this.state;
    return (
      <div>
        <h2>react-test-bundle</h2>
        <Button onClick={() => this.setState({ elements: 10 })}>Reset elements</Button>
        <Button onClick={() => this.setState(state => ({ elements: state.elements + 10 }))}>
          Add elements
        </Button>
        <Button onClick={this.handleUpdate}>Update</Button>
        <Button disabled={!!testId} onClick={this.handleStartTest}>
          Start test
        </Button>
        <Button disabled={!testId} onClick={this.handleStopTest}>
          End test
        </Button>
        <Tree deep={elements} color={COLORS[colorIndex]} />
      </div>
    );
  }
}

render(<App />, document.getElementById('react-test-bundle'));

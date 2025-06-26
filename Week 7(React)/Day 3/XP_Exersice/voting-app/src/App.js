import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

// BuggyCounter class component
class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <h2>Simulation 1: Two counters, one ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <h2>Simulation 2: Each counter in its own ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <h2>Simulation 3: No ErrorBoundary</h2>
      <BuggyCounter />
    </div>
  );
}

export default App;

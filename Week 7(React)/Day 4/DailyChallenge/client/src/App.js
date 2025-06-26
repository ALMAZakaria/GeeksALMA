import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    apiMessage: '',
    input: '',
    response: '',
  };

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/api/hello');
    const data = await res.json();
    this.setState({ apiMessage: data.message });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: this.state.input }),
    });
    const data = await res.json();
    this.setState({ response: data.message });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.apiMessage}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Type something..."
          />
          <button type="submit">Send</button>
        </form>
        {this.state.response && <p>{this.state.response}</p>}
      </div>
    );
  }
}

export default App;

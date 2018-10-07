import React, { Component } from 'react';
import './App.css';
import Simon from './Simon';

class App extends Component {

  constructor() {
    super();
    this.state = {
      colors: null,
      index: null,
    }
  }

  randomNumbers = () => {
    return [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
  }

  getColors = (nums) => {
    const colors = nums.map((num) => {
      if (num <= 0.25) {
        return "red"
      } else if (num > 0.25 && num <= 0.5) {
        return "green"
      } else if (num > 0.5 && num <= 0.75) {
        return "blue"
      } else {
        return "yellow"
      }
    });
    this.setState({ colors })
  }

  componentWillMount() {
    this.getColors(this.randomNumbers());
  }

  render() {
    return (
      <div className="App">
        <h1>
          App
        </h1>
        <Simon colors={this.state.colors} index={this.state.index} />
      </div>
    );
  }
}

export default App;

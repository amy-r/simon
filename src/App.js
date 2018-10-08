import React, { Component } from 'react';
import './App.css';
import Simon from './Simon';

class App extends Component {

  constructor() {
    super();
    this.state = {
      colors: null,
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

  checkColors = (userGuess) => {
    if (userGuess.toString() === this.state.colors.toString()) {
      alert("you win")
    }
  }

  render() {
    return (
      <div className="App">
        <Simon colors={this.state.colors} checkColors={this.checkColors} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TimeRemaining from './countdown.js';

class GameArea extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(choice, e) {
    this.props.playerChoice(choice)
  }

  render() {
    return (
      <div className="GameArea">
        <TimeRemaining time={this.props.timeRemaining} />
        <div className="row">
          <div className="centered">
            <button className="btn btn-dark" onClick={this.handleClick.bind(this, 'rock')}>Rock</button>
            <button className="btn btn-light" onClick={this.handleClick.bind(this, 'paper')}>Paper</button>
            <button className="btn btn-danger" onClick={this.handleClick.bind(this, 'scissors')}>Scissors</button>
          </div>
        </div>
      </div>
    );
  }

};

export default GameArea;
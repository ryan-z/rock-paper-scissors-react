import React, { Component } from 'react';
import './App.css';
import GameArea from './components/game_area';
class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ['rock', 'paper', 'scissors']
    this.state = {timeRemaining : undefined};
  }

  countDown() {
    this.setState({'timeRemaining' : 3});
    let intervalId = setInterval(() => {
      this.setState({
        'timeRemaining' : this.state.timeRemaining - 1
      });

      if(this.state.timeRemaining === 0) {
        clearInterval(intervalId);
        this.setState({
          timeRemaining: undefined,
          computerChoice : this.weapons[Math.floor(Math.random() * 100) % 3],
          winner : this.computeWinner()
        })
      }
    }, 1000);

  }

  computeWinner = () => {
    const computerChoice = this.state.computerChoice;
    const playerChoice = this.state.playerChoice;

    if(!playerChoice) {
      return "Try choosing before your opponent, cheater!"
    }
    else if(computerChoice === playerChoice) {
      return "Tie!"
    }
    else if((computerChoice === 'rock' && playerChoice === 'scissors') ||
      (computerChoice === 'paper' && playerChoice === 'rock') ||
      (computerChoice === 'scissors' && playerChoice === 'paper')) {
      return "The computer chose "+computerChoice+" and won :("
    }
    else {
      return "You won with " + playerChoice + "!!"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rock, Paper, Scissors</h1>
          <button id="btn-start" type="button" className="btn btn-primary" onClick={() => {this.countDown()}}>Start!</button>
        </header>
        <GameArea
          timeRemaining={this.state.timeRemaining}
          computerChoice={this.state.computerChoice}
          playerChoice={(choice) => {
            this.setState({playerChoice : choice})
            console.log(choice)} }/>
        <p>{this.state.winner}</p>
      </div>
    );
  }

  

}

export default App;

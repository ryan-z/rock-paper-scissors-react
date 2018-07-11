import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.time === 1) {
      return "Scissors..."
    }
    else if(this.props.time === 2) {
      return "Paper..."
    }
    else if(this.props.time === 3) {
      return "Rock..."
    }
    else
      return null;
  }
};

export default Countdown;
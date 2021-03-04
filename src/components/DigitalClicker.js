// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render(){
    return(<button onClick={this.incrementCounter}>{this.state.timesClicked}</button>)
  }
}
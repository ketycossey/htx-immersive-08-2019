import React, { Component } from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    this.Oneinterval = setInterval(() => this.number(), 1000);
  }
  componentWillMount() {
    clearInterval(this.Oneinterval);
  }
  number() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <>
        <h1 className='clock'>The time is {this.state.time}.</h1>
      </>
    );
  }
}
export default Clock;

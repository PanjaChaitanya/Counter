import React from 'react';
import './Mycount.css';

class Mycount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: '',
      min: '',
      max: '',
      msg: '',
      start:'',
    };
  }
  setFun = () => {
    var min = parseInt(document.getElementById('i1').value);
    var start = parseInt(document.getElementById('i2').value);
    var max = parseInt(document.getElementById('i3').value);
    if (min < start && start < max) {
      this.setState({
        min: min,
        count: start,
        max: max,
        start: '',
        msg: '🟢 Starting Point 🟢',
      });
    } else {
      this.setState({
        msg: '😕 Invalid Input 😕'
        });
      
    }
  };
  IncreaseFun = () => {
    if (this.state.count < this.state.max) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        msg: '',
      }));
    } else {
      this.setState({
        msg: '⚠️ Increase limit reached ⚠️',
      });
    }
  };
  DecreaseFun = () => {
    if (this.state.count > this.state.min) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
        msg: '',
      }));
    } else {
      this.setState({
        msg: '⚠️ Decrease limit reached ⚠️',
      });
    }
  };
  resetFun = () => {
    document.getElementById('i1').value=''
    document.getElementById('i2').value=''
    document.getElementById('i3').value=''
    this.setState({
      count: this.state.start,
      msg: '',
    });
  };
  render() {
    return (
      <>
        <header>INTERACTIVE COUNTER</header>
        <div id="container">
          <div id="inputContainer">
            <input type="number" id="i1" placeholder="Enter Minimum Value" />
            <input type="number" id="i2" placeholder="Enter Start Value" />
            <input type="number" id="i3" placeholder="Enter Maximum Value" />
          </div>
          <div id='setBtn'>
            <button onClick={this.setFun}>Set</button>
          </div>
          <div id="countContainer">
            <h1>{this.state.count}</h1>
          </div>
          <div id="msgContainer">
            <p>{this.state.msg}</p>
          </div>
          <div id="buttonsContainer">
            <button id="increase" onClick={this.IncreaseFun}>🢁</button>
            <button id="reset" onClick={this.resetFun}>⟳</button>
            <button id="decrease" onClick={this.DecreaseFun}>🢃</button>
          </div>
        </div>
      </>
    );
  }
}

export default Mycount;

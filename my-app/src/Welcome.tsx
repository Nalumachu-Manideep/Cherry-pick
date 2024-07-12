import React, { Component } from 'react';
import './Greet.css';
import LifeCycleB from './LifeCycleB';

interface WelcomeProps {
  name?: string;
  heroName?: string;
}

class Welcome extends Component<WelcomeProps> {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || "Manideep"
    };

    console.log("LifecycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifecycleA  shouldComponentUpdate")
    return true  
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate")
    return null;
      
  }
  componentDidUpdate(){
    console.log("LifecCycleA componentDidUpdate")
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  changeState=()=>{
    this.setState({
      name:"Updated Manideep"
    })
  }

  render() {
    console.log("LifecycleA render");

    return (
      <>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>click</button>
        <LifeCycleB/>
        <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>

        <div id="container">
          <label htmlFor="operand1">Enter the Operand 1 :</label>
          <input type="text" id="input1"></input>
        </div>

        <div id="container">
          <label htmlFor="operand2">Enter the Operand 2 :</label>
          <input type="text" id="input2"></input>
        </div>

        <h3>Select the Operation you want to perform and then <span>click on Get Result button</span> :</h3>

        <select id="operations" >
          <option value="Addition">Addition</option>
          <option value="Subtraction">Subtraction</option>
          <option value="Multiplication">Multiplication</option>
          <option value="Division">Division</option>
        </select>

        <button id="btn">Get Result</button>
      </>
    );
  }
}

export default Welcome;

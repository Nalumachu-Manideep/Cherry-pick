import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "Manideep"
        };
    
        console.log("LifecycleB Constructor");
      }
    
      static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
      }
    
      shouldComponentUpdate() {
        console.log("LifecycleB  shouldComponentUpdate")
        return true 
          
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;
          
      }
      componentDidUpdate(){
        console.log("LifecCycleB componentDidUpdate")
      }
    
      componentDidMount() {
        console.log("LifecycleB componentDidMount");
      }
  render() {
    return (
      <div>LifeCycle B</div>
    )
  }
}

export default LifeCycleB

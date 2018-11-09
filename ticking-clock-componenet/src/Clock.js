import React, { Component } from 'react'
class Clock extends Component {
   constructor(props){
       super(props);
       this.state = {
           time: new Date().toLocaleString()
       };
       this.updateClock = this.updateClock.bind(this);
   }

   componentDidMount(){
       this.intervalID = setInterval(this.updateClock,1000);
   }
   componentWillUnmount(){
    clearInterval(this.intervalID);
   }
   updateClock(){
    this.setState({
        time: new Date().toLocaleString()
    })
   }
  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
}

export default Clock;
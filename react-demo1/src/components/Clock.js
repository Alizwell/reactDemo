import React from 'react';
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    }
    this.name = '123';
  }
  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.tick();
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    console.log(this.name);
    this.setState({
      time: new Date()
    });
  }

  render(){
    return (
      <div>
        <span>{this.state.time.toLocaleTimeString()}</span>
      </div>
    )
  }
}

export default Clock;
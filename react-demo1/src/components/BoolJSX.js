import React, { Component } from 'react';
class BoolJSX extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      type: true
     };
  }
  changeType (){
    let type = this.state.type;
    this.setState({
      type: !type
    })
  }
   changeType1 = ()=> {
     this.setState((state,props)=>({
        type: !state.type
     }))
  }
  render() {
    return (
      <div>
        <h2>我是JSX中的布尔表达式</h2>
        {  this.state.type &&
          <span>当type为true我显示</span>
        }
        <br />
        {/* <button  onClick={ this.changeType.bind(this) }>切换type</button> */}
        {/* <button  onClick={ this.changeType1 }>切换type</button> */}
        <button  onClick={ (e)=>{ this.changeType(e) }}>切换type</button>
        <br />
        <span>{ String( this.state.type ) }</span>
      </div>
    );
  }
}

export default BoolJSX;
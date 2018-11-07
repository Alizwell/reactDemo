import React, { Component } from 'react';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:'',
      isCheck: true,
      isGoing: 'xueyong'
     };
  }
  changeName = (e)=>{
    this.setState({
      name: e.target.value.toUpperCase()
    })
  }
  inputChange = (e)=>{
    let name = e.target.name;
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    return <form>
        <input value={this.state.name} onChange={this.changeName} />
        <p>{this.state.name}</p>
        <label>isGoing: {this.state.isGoing}</label>
        <input name="isGoing" type="text" value={this.state.isGoing} onChange={this.inputChange} />
        <label>isCheck: {String(this.state.isCheck)}</label>
        <input name="isCheck"  checked={this.state.isCheck}  type="checkbox" value={this.state.isCheck} onChange={this.inputChange} />
        <input   />
      </form>;
  }
}

export default Form;
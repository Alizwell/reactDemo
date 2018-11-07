import React, { Component } from 'react';
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = e => {
    this.props.temperatureChange(e.target.value);
  };
  handleChange2 = e=>{
    this.props.temperatureChange(e);
  }
  render() {
    let scaleName = {
      c: "Celsius",
      f: "Fahrenheit"
    };
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[this.props.scale]}:</legend>
        <input
          value={this.props.temperature}
          datatype={this.props.scale}
          onChange={this.handleChange2}
          // onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
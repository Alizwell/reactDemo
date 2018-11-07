import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      scale:'f',
      temperature: 37
     };
  }

  temperatureChange =(e)=>{
    debugger;
    this.setState({
      scale: e.target.getAttribute('datatype'),
      temperature: e.target.value
    })
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  tryConvert (temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    let temperature = this.state.temperature;
    let celsius = this.state.scale === 'c' ? temperature : this.tryConvert(temperature, this.toCelsius);
    let fahrenheit = this.state.scale === 'f' ? temperature : this.tryConvert(temperature, this.toFahrenheit);
    return (
      <div>
        <TemperatureInput 
          scale="f"   
          temperature = {
            fahrenheit
          } 
          // temperatureChange = {
          //   this.handleFahrenheitChange
          // }
          temperatureChange = {
            this.temperatureChange
          }
        />
        <TemperatureInput 
          scale = "c"
          temperature = {
            celsius
          } 
          // temperatureChange = {
          //   this.handleCelsiusChange
          // }
          temperatureChange = {
            this.temperatureChange
          }
        />
      </div>    
    );
  }
}

export default Calculator;


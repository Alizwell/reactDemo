import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';


import Home from './components/Home';
import Welcome from './components/News'; 
import List from './components/List';
import Clock from './components/Clock';
import BoolJSX from './components/BoolJSX';
import Form from './components/Form';

import Calculator from './components/Calculator';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome  name="xueyong"  />
        <Home />
        <List />
        <Clock />
        <BoolJSX />
        <Form /> */}
        <Calculator />
      </div>
    );
  }
}

export default App;

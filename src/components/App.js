import React, { Component } from 'react';
import Home from './Home.js';
import Main from './Main.js';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Main />
      </div>
    );
  }
}

export default App;

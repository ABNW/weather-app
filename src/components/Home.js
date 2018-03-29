import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../css/App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/weather">Weather</Link>
      </div>
    );
  }
}

export default Home;

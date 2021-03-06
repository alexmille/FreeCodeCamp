import React, { Component } from 'react';
import logo from './galactic-empire-logo.png';
import './App.css';
import GetQuote from './GetQuote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Star Wars Quotes</h1>
        </header>
        <div className="App-intro">
          <br />
          <br />
          <GetQuote />
        </div>
      </div>
    );
  }
}

export default App;

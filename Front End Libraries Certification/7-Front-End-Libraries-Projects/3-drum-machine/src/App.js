import React, { Component } from 'react';
import './App.css';
import DrumMachine from './DrumMachine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="drum-logo-title">Drum  Machine</h1>
        </header>
        <DrumMachine />
        <footer className="footer">Project made for my <a href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine" target="_blank" rel="noopener noreferrer">FreeCodeCamp Front End Libraries Certification</a> | Project 3 - Build a Drum Machine | <a href="https://github.com/alexmille/FreeCodeCamp/tree/master/Front%20End%20Libraries%20Certification/7-Front-End-Libraries-Projects/3-drum-machine">Github</a></footer>
      </div>
    );
  }
}

export default App;

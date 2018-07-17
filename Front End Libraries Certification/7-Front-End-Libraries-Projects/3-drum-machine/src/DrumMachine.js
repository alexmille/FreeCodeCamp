import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class DrumMachine extends Component {
  constructor(){
    super();
    this.state = {
      curKey: "",
      kbd: "",
      curSound: ""
    }
  }

  componentDidMount() {
    console.log('this handlekey did mount' + this.handleKey);
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    console.log('this handlekey did unmount' + this.handleKey);
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    e.preventDefault();
    this.setState({
      kbd:(e.keyCode),
      curKey:(e.key)
    })

    switch(e.keyCode){
      case 81:
        this.setState({curSound: "Bass"});
        const bass = new Audio('./sounds/boom.wav');
        bass.play();
        console.log(this.state);
        break;
      case 87:
        this.setState({curSound: "Tom"});
        const tom = new Audio('./sounds/tom.wav');
        tom.play();
        console.log(this.state);
        break;  
      case 69:
        this.setState({curSound: "Clap"});
        const clap = new Audio('./sounds/clap.wav');
        clap.play();
        console.log(this.state);
        break;
      case 65:
        this.setState({curSound: "Kick"});
        const kickS = new Audio('./sounds/kick.wav');
        kickS.play();
        console.log(this.state);
        break;
      case 83:
        this.setState({curSound: "Hi Hat"});
        const hiHat = new Audio('./sounds/hihat.wav');
        hiHat.play();
        console.log(this.state);
        break;
      case 68:
        this.setState({curSound: "Open Hat"});
        const openHat = new Audio('./sounds/openhat.wav');
        openHat.play();
        console.log(this.state);
        break;
      case 90:
        this.setState({curSound: "Ride"});
        const ride = new Audio('./sounds/ride.wav');
        ride.play();
        console.log(this.state);
        break;
      case 88:
        this.setState({curSound: "Snare"});
        const snare = new Audio('./sounds/snare.wav');
        snare.play();
        console.log(this.state);
        break;
      case 67:
        this.setState({curSound: "Tink"});
        const tink = new Audio('./sounds/tink.wav');
        tink.play();
        console.log(this.state);
        break;
      default:
        console.log('out of range');
        this.setState({
          curSound: "None",
          kbd: "-",
          curKey: "-"
        })
    }
  }

  handleClicks = (param,song, e) => {
    e.preventDefault();
    console.log("Param " + param)
    this.setState({
      kbd:(param),
      curKey:(param),
      curSound:(song)
    })
    switch(param){
      case "q":
        const bass = new Audio('./sounds/boom.wav');
        bass.play();
        console.log(this.state);
        break;
      case "w":
        const tom = new Audio('./sounds/tom.wav');
        tom.play();
        console.log(this.state);
        break;
      case "e":
        this.setState({curSound: "Clap"});
        const clap = new Audio('./sounds/clap.wav');
        clap.play();
        console.log(this.state);
        break;
      case "a":
        this.setState({curSound: "Kick"});
        const kickS = new Audio('./sounds/kick.wav');
        kickS.play();
        console.log(this.state);
        break;
      case "s":
        this.setState({curSound: "Hi Hat"});
        const hiHat = new Audio('./sounds/hihat.wav');
        hiHat.play();
        console.log(this.state);
        break;
      case "d":
        this.setState({curSound: "Open Hat"});
        const openHat = new Audio('./sounds/openhat.wav');
        openHat.play();
        console.log(this.state);
        break;
      case "z":
        this.setState({curSound: "Ride"});
        const ride = new Audio('./sounds/ride.wav');
        ride.play();
        console.log(this.state);
        break;
      case "x":
        this.setState({curSound: "Snare"});
        const snare = new Audio('./sounds/snare.wav');
        snare.play();
        console.log(this.state);
        break;
      case "c":
        this.setState({curSound: "Tink"});
        const tink = new Audio('./sounds/tink.wav');
        tink.play();
        console.log(this.state);
        break;
      default:
        console.log("Nooooo");
    }
  }

  render(){
    return(
      <div id="drum-machine">
        <div className="left-col">
          <div className="drum-logo-big">Jules</div>
          <div className="drum-logo-small">LOL-08</div>
          <div id="display">
            <div className="display-text">
              <b>Key Pressed:</b> {this.state.curKey}<br />
            </div>
            <div className="display-text">
              <b>Track:</b> {this.state.curSound}
            </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="right-col">
          <div className="pad" onClick={this.handleClicks.bind(this, "q","Bass")}>Q</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "w", "Tom")}>W</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "e", "Clap")}>E</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "a", "Kick")}>A</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "s", "Hi Hat")}>S</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "d", "Open Hat")}>D</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "z", "Ride")}>Z</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "x", "Snare")}>X</div>
          <div className="pad" onClick={this.handleClicks.bind(this, "c", "Tink")}>C</div>
        </div>
      </div>
    )
  }
}

export default DrumMachine;
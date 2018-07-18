class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    let displayVar;
    if(this.state.display){
      displayVar = <h1>Displayed!</h1>
    } else {console.log('nope')}

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {displayVar}
       </div>
    );
  }
};
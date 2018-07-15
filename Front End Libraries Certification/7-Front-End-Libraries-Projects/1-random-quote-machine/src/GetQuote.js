import React, { Component } from 'react';
import './App.css';
import data from './quotes.json';

class GetQuote extends Component {
  constructor(){
    super();

    this.newQuote = this.newQuote.bind(this);

    let initCount = Math.floor((Math.random() * 40) + 1);
    let initQuote = data[initCount].Quote;
    let initCharacter = data[initCount].Character;

    this.state={
      movieQuote: initQuote,
      movieCharacter : initCharacter,
    }
  }

  newQuote() {
    let randomQuote = Math.floor((Math.random() * 40) + 1);
    let quote = data[randomQuote].Quote;
    let character = data[randomQuote].Character;

    this.setState({
      movieQuote : quote,
      movieCharacter : character,
    });
    console.log("This:", this);
    console.log("randomQuote variable", (randomQuote));
    console.log("data[randomQuote].character variable", data[randomQuote].Character)
    console.log("data[randomQuote].quote variable", data[randomQuote].Quote)
  }

  tweetUrl() {
    return <p>yo</p>
  }

  render() {
    let twitterUrl = 'https://twitter.com/intent/tweet?hashtags=randomQuotes&related=starwars&text=' + this.state.movieQuote + " - " + this.state.movieCharacter;

    return(
      <div className="card">
        <h4 className="card-header">{this.state.movieCharacter}</h4>
        <div className="card-body">
          <p className="card-text"><i>{this.state.movieQuote}</i></p>
          <button className="btn btn-primary" onClick={this.newQuote}>Get another quote</button>or 
          <a className="btn btn-primary" href={twitterUrl}>Tweet this</a>
        </div>

      {console.log(this.state)}

    </div>
    );
  }
}

export default GetQuote;
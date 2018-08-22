import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import Button from './Button'

class App extends Component {
  constructor () {
    super ();
    this.state = {quote: ""}}
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <p className="App-intro">
          Click the button to get a random Tommy Wiseau quote from the movie, The Room!
        </p>
        <Button></Button>
      </div>
    );
  }
}

const quotes = ["Oh hai, Mark", "Haha, what a story Mark!", "Oh hi, doggie", "You're tearing me apart Lisa!", "Cheep! Cheep! Cheep!"];

export default App;

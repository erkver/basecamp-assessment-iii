import React, { Component } from 'react';
import tommyw from './tommyw.jpg';


class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={tommyw} className="App-img" alt="Tommy Wiseau" />
          <h1 className="App-title">Welcome to Tommy's World</h1>
        </header>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Welcome to Coffee with Craig</h1>
        {/* <p className="App-intro">{serverInfo}</p> */}
        <p className="App-intro">Schedule a coffee date.</p>
      </header>
    );
  }
}
export default Header;
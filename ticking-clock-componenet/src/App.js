import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import './App.css';

class App extends Component {
  render() {
    let date= new Date().toLocaleString();
    console.log(date);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
          <Clock currentDate={date} />
        </div>
        </header>
        
      </div>
    );
  }
}

export default App;

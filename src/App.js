import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React project for Software Engineering Lab Course
        </p>
        <p>
          In The Name of The God
        </p>
        <p>
          Created by:
          <br />
          - Mohamad Javad Allaedini
          <br />
          - Seyed Hasan Moafi
          <br />
          - Amir Tohidi
        </p>
        <button className="App-button">
          I am a button
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>What does it all mean?</p>
      </header>
    </div>
  );
}

export default App;
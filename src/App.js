import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React project of software engineering lab course
        </p>
        <p>
          In The Name of The God
        </p>
        <p>created by mohamad javad allaedini, seyed hasan moafi and amir tohidi</p>
        <button>
          i am button
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Chat from './chat/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Main Page!!!!
        </a>
      </header>
      <Chat />
    </div>
  );
}

export default App;

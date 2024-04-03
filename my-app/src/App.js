import logo from './logo.svg';
import './App.css';
import Welcome from './ch05/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리엑트 Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Welcome name="인제"/>
      <Welcome name="순신"/>
      <Welcome name="강감찬"/>
    </div>
  );
}

export default App;

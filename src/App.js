import logo from './assets/nu-logo-teal.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Best Night of the Week</p>
        <p>COMING SOON</p>
        <a
          className="App-link"
          href="https://www.instagram.com/denverurbanskate/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Instagram
        </a>
      </header>
    </div>
  );
}

export default App;

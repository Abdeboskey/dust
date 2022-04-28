import logo from './assets/nu-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coming Soon</p>
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

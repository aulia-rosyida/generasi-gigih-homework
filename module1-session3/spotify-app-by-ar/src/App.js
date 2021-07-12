import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{process.env.REACT_APP_TITLE} - by Aulia Rosyida</h1>
        <h3>{process.env.REACT_APP_DESCRIPTION}</h3>

        {process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_MODE
          : process.env.REACT_APP_PRO_MODE}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, coba munculin id:
          {process.env.REACT_APP_SPOTIFY_KEY}
        </a>
      </header>
    </div>
  )
}

export default App

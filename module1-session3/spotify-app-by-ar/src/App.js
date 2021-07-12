import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>by Aulia Rosyida</h1>

        <div class="form-group">
          <div class="col-sm-10">
            <input type="text" id="search" placeholder="Enter something..." />
            <button type="button" class="btn btn-default" id="btn-submit">
              Submit
            </button>
          </div>
        </div>

        <img
          src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
          alt="gif"
        />
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

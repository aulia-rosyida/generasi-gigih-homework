import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>by Aulia Rosyida</h1>
        <img src={logo} className="App-logo" alt="logo" />

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
      </header>
    </div>
  )
}

export default App

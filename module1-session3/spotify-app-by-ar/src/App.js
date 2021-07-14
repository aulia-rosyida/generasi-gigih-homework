import logo from './logo.svg'
import './App.css'
import ButtonSubmit from './components/Button'
import Image from './components/Image'
import gifData from './data/gifData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>by Aulia Rosyida</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div class="form-group">
          <div class="col-sm-10">
            <input type="text" id="search" placeholder="Enter something..." />
            <ButtonSubmit />
          </div>
        </div>
        <Image url={gifData.url} />
      </header>
    </div>
  )
}

export default App

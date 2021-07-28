import './App.css'
import Search from './pages/Search'
import Trending from './pages/trending'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
          </ul>

          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
        </div>
      </Router>
    </div>
  )
}

export default App

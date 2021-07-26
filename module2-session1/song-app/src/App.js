import './App.css'
import Search from './pages/Search'
import store from './app/store'
import { Provider } from 'react-redux'

//add provider for redux
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
      </div>
    </Provider>
  )
}

export default App

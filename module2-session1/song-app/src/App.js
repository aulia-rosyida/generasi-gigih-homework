import './App.css'
import Card from './components/card/index'
import songJson from '../api/song'

function App() {
  return (
    <div className="App">
      <Card
        albumName={songJson.album.name}
        imgUrl={songJson.album.images[0].url}
        artistName={songJson.album.artists[0].name}
        albumName={songJson.album.name}
      />
    </div>
  )
}

export default App

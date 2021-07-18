import './App.css'
import Card from './components/card/index'
import songJson from './api/song'

function App() {
  return (
    <div className="App">
      <Card
        albumName={songJson.album.name}
        imageUrl={songJson.album.images[1].url}
        artistName={songJson.album.artists[0].name}
      />
    </div>
  )
}

export default App

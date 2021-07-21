import './App.css'
import Card from './components/card/index'
import tracks from './api/tracks'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <Search/>
       {
          tracks.map( track => {
            return track && 
            <div key={track?.id}>{
              track &&
              <div>
                <Card
                  albumName={track.album.name}
                  imageUrl={track.album.images[1].url}
                  artistName={track.album.artists[0].name}
                />
              </div>
              }
            </div>
          })
        }
    </div>
  )
}

export default App

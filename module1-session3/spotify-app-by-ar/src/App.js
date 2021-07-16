import './App.css'
import Image from './components/Image'
import gifsData from './data/gifsData'

function App() {

  const filteredGif = gifsData.map(
    aGif => {
      if(aGif.rating==="g"){
        return aGif;
      }
      else return null;
    }
  )

  return (
    <div className="App">
        {
          filteredGif.map( aFilterGif => {
            return aFilterGif && 
            <div key={aFilterGif?.id}>{
              aFilterGif &&
              <div>
                 <p>The rating is : {aFilterGif.rating} </p>
                 <p>The title is : {aFilterGif.title}</p>
                 <Image url={aFilterGif.url}/>
              </div>
              }
            </div>
          })
        }
    </div>
  )
}

export default App

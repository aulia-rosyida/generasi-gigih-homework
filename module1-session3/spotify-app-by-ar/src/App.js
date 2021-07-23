import './App.css'
import SpotifyLoginButton from './components/SpotifyLoginButton'
import React, { useEffect, useState } from 'react'
import getHashParams from './helper/HashParameter'
import Search from './components/Search/index'

function App() {
  const [spotifyToken, setSpotifyToken] = useState(null)

  useEffect(() => {
    let params = getHashParams()
    let token = params.access_token
    setSpotifyToken(token)
    console.log('token disini')
    console.log(spotifyToken)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{process.env.REACT_APP_TITLE} - by Aulia Rosyida</h1>
        {(() => {
          if (spotifyToken != null) {
            return (
              <div>
                <Search searchToken={spotifyToken} />
              </div>
            )
          } else
            return (
              <div>
                <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
                <SpotifyLoginButton />
              </div>
            )
        })()}
      </header>
    </div>
  )
}

export default App

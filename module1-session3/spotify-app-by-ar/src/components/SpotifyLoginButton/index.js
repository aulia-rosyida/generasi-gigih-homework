import React from 'react'

const SpotifyLoginButton = () => {
  let keyId = process.env.REACT_APP_SPOTIFY_KEY
  let scopePlaylist = 'playlist-modify-private'
  let redirectUri = 'http://localhost:3000/'

  let urlSpotify = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(
    keyId,
  )}&scope=${encodeURIComponent(
    scopePlaylist,
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`

  return (
    <a href={urlSpotify} className="login-button">
      LOG IN WITH SPOTIFY
    </a>
  )
}

export default SpotifyLoginButton

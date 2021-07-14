import React from 'react'
import './Card.css'
// import song from './song-image.svg'
import songJson from '../api/song'

function Card() {
  return (
    <div class="row center">
      <div class="column">
        <div class="card">
          <h3 id="title-song">
            <b>{songJson.album.name}</b>
          </h3>
          <img
            src={songJson.album.images[0].url}
            alt="json"
            height="250"
            width="250"
          />
          <p id="artist-song">
            <b>{songJson.album.artists[0].name}</b>
          </p>
          <p id="album-song">{songJson.album.name}</p>
          <button type="button" class="btn btn-default" id="btn-play">
            Select
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

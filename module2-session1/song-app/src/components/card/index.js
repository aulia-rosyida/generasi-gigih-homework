import React from 'react'
import './index.css'

function Card(props) {
  return (
    <div class="row center">
      <div class="column">
        <div class="card">
          <h3 id="title-song">
            <b>{props.albumName}</b>
          </h3>
          <img src={props.ImgUrl} alt="json" height="250" width="250" />
          <p id="artist-song">
            <b>{props.artistName}</b>
          </p>
          <p id="album-song">{props.albumName}</p>
          <button type="button" class="btn btn-default" id="btn-play">
            Select
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

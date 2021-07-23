import React from 'react'
import './index.css'
import Image from '../Image'

function Card(props) {
  return (
    <div className="row center">
      <div className="column">
        <div className="card">
          <h3 className="title-song">
            <b>{props.albumName}</b>
          </h3>
          <Image url={props.imageUrl} />
          <p id="artist-song">
            <b>{props.artistName}</b>
          </p>
          <p id="album-song">{props.albumName}</p>
          <button type="button" className="btn btn-default" id="btn-play">
            Select
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

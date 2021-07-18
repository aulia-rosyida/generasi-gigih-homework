import React from 'react'
import './index.css'
import Image from '../image'

function Card(props) {
  return (
    <div className="row center">
      <div className="column">
        <div className="card">
          <h3 id="title-song">
            <b>{props.albumName}</b>
          </h3>
          {/* <img src={props.ImgUrl} alt="json" height="250" width="250" /> */}
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
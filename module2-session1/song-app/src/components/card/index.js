import React from 'react'
import './index.css'
import Image from '../image'

function Card(props) {
  return (
    <div className="row center">
      <div className="column">
        <div className="card">
          <h3 id="title-song">
            <b>{props.gifName}</b>
          </h3>
          <Image url={props.gifUrl} />
          <p id="artist-song">
            <b>{props.gifRating}</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card

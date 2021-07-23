import './index.css'
import Image from '../Image'
import React, { useEffect, useState } from 'react'

function Card(props) {
  const [statusSelected, setStatusSelected] = useState(props.isSelected)

  function clickedCard() {
    setStatusSelected(!statusSelected)
  }

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
          <button
            type="button"
            className="btn btn-default"
            id="btn-play"
            onClick={clickedCard}
          >
            {(() => {
              if (statusSelected === false) {
                return <p>Select</p>
              } else return <p>Unselect</p>
            })()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

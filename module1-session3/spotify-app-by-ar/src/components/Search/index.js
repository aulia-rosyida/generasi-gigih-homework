import React, { useEffect, useState } from 'react'
import Card from '../Card/index'
import axios from 'axios'

const Search = (props) => {
  const [songs, setSongs] = useState([])
  const [inputTitle, setInputTitle] = useState('input here')

  useEffect(() => {
    getSongs()
  }, [])

  const getSongs = async () => {
    try {
      console.log('masuk search - token disini')
      console.log(props.searchToken)
      let url = `https://api.spotify.com/v1/search?q=${inputTitle}&type=track`
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + props.searchToken,
          },
        })
        .then((res) => {
          setSongs(res.data.tracks.items)
        })
    } catch (err) {
      console.error(err)
    } finally {
      console.log(songs)
    }
  }

  const [selectedSongsId, setSelectedSongs] = useState([])

  function clickedCard(id) {
    if (!checkedStatusSong(id)) setSelectedSongs([...selectedSongsId, id])
    else {
      let indexSong = selectedSongsId.indexOf(id)
      if (indexSong != -1) {
        let tempSelected = [...selectedSongsId]
        tempSelected.splice(indexSong, 1)
        setSelectedSongs(tempSelected)
      }
    }
  }

  function printId() {
    console.log(selectedSongsId)
  }

  function checkedStatusSong(id) {
    return selectedSongsId.includes(id)
  }

  return (
    <div className="search-form">
      <label>
        Name:
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" onClick={getSongs} />
      <button
        type="button"
        className="btn btn-default"
        id="btn-play"
        onClick={() => printId()}
      >
        PRINT ID HERE
      </button>
      {songs.map((track) => {
        return (
          track && (
            <div key={track?.id}>
              {track && (
                <div>
                  <Card
                    cardId={track.id}
                    isSelected={checkedStatusSong(track.id)}
                    albumName={track.name}
                    imageUrl={track.album.images[0].url}
                    artistName={track.album.artists[0].name}
                    functionClicked={() => clickedCard(track.id)}
                  />
                </div>
              )}
            </div>
          )
        )
      })}
    </div>
  )
}

export default Search

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
      let url = `https://api.spotify.com/v1/search?q=${inputTitle}&type=track,artist`
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
      {songs.map((track) => {
        return (
          track && (
            <div key={track?.id}>
              {track && (
                <div>
                  <Card
                    albumName={track.album.name}
                    imageUrl={track.album.images[0].url}
                    artistName={track.album.artists[0].name}
                  />
                </div>
              )}
            </div>
          )
        )
      })}
      {/* {songs.data?.map((gif) => {
        return (
          gif && (
            <div key={gif?.id}>
              {gif && (
                <div>
                  <p>The rating is : {gif.rating} </p>
                  <p>The title is : {gif.title}</p>
                  <Image url={gif.images.original.url} />
                </div>
              )}
            </div>
          )
        )
      })} */}
    </div>
  )
}

export default Search

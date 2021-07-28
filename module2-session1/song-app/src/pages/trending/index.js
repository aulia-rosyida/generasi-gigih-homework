import React, { useEffect, useState } from 'react'
import Card from '../../components/card'
import SearchBar from '../../components/searchBar'

const Trending = () => {
  const [gifs, setGifs] = useState([])
  const [inputGif, setInputGif] = useState('input here')

  const getGif = async (e) => {
    e.preventDefault()
    const gifs = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=5mioeMFTkhOA8A2JSAbf6RmYwPHN9eME&q=${inputGif}&limit=12`,
    ).then((response) => response.json())
    setGifs(gifs)
    console.log(gifs)
  }

  const setSearchGif = (e) => {
    setInputGif(e.target.value)
  }

  return (
    <div className="search-form">
      <h1>Ini page trending</h1>
      <form onSubmit={getGif}>
        <label>Click trending:</label>
        <input type="submit" value="Submit" />
      </form>

      {gifs.data?.map((gif) => {
        return (
          gif && (
            <div key={gif?.id}>
              {gif && (
                <Card
                  gifName={gif.title}
                  gifUrl={gif.images.original.url}
                  gifRating={`Rating: ${gif.rating}`}
                />
              )}
            </div>
          )
        )
      })}
    </div>
  )
}

export default Trending

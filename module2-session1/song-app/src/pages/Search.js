import React, { useEffect, useState } from 'react'
import './Search.css'
import Image from '../components/image/index.js'

const Search = () => {
  const [gifs, setGifs] = useState([])
  const [inputGif, setInputGif] = useState('input here')

  useEffect(() => {
    getGif()
  }, [])

  const getGif = async () => {
    const gifs = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=5mioeMFTkhOA8A2JSAbf6RmYwPHN9eME&q=${inputGif}&limit=12`,
    ).then((response) => response.json())
    setGifs(gifs)
    console.log(gifs)
  }

  return (
    <div className="search-form">
      {/* <form onSubmit={handleSubmit}> */}
      <label>
        Name:
        <input
          type="text"
          value={inputGif}
          onChange={(e) => setInputGif(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" onClick={getGif} />
      {/* </form> */}
      {gifs.data?.map((gif) => {
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
      })}
    </div>
  )
}

export default Search

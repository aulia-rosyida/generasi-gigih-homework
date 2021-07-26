import React, { useEffect, useState } from 'react'
import './Search.css'
import Card from '../components/card'
import SearchBar from '../components/searchBar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/counterSlice'

const Search = () => {
  const [gifs, setGifs] = useState([])
  const [inputGif, setInputGif] = useState('input here')

  //contoh penggunaan useSelector dan dispatch pada redux
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const getGif = async (e) => {
    e.preventDefault()
    const gifs = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=5mioeMFTkhOA8A2JSAbf6RmYwPHN9eME&q=${inputGif}&limit=12`,
    ).then((response) => response.json())
    setGifs(gifs)
    console.log(gifs)
  }

  const setSearchGif = (e) => {
    setInputGif(e.target.value)
  }

  return (
    <div className="search-form">
      <SearchBar
        inputSearchGif={inputGif}
        getSearchGif={getGif}
        setInputSearchGif={setSearchGif}
      />

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
                // <div>
                //   <p>The rating is : {gif.rating} </p>
                //   <p>The title is : {gif.title}</p>
                //   <Image url={gif.images.original.url} />
                // </div>
              )}
            </div>
          )
        )
      })}
      {/* contoh penggunaan dispatch redux pada increment dan decrement */}
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Search

import React from 'react'
import './index.css'

function SearchBar(props) {
  return (
    <form onSubmit={props.getSearchGif}>
      <label>
        Name:
        <input
          type="text"
          value={props.inputSearchGif}
          onChange={props.setInputSearchGif}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SearchBar

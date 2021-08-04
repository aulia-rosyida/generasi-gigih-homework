import React from 'react'
import './index.css'
import TextField from '@material-ui/core/TextField';  

function SearchBar(props) {
  return (
    <form onSubmit={props.getSearchGif}>
        <TextField
          label="Name" 
          variant="outlined"
          type="text"
          value={props.inputSearchGif}
          onChange={props.setInputSearchGif}
        />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SearchBar

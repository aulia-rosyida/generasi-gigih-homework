import React from 'react'
import './Search.css'
import Image from '../components/image/index.js'

function fetchAPI(param, callback) {
  // param is a highlighted word from the user before it clicked the button
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=5mioeMFTkhOA8A2JSAbf6RmYwPHN9eME&q=${param}&limit=10`,
  ).then(callback)
}
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputSearch: '', songs: null }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ inputSearch: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('masuk handle submit')
    alert('A name was submitted: ' + this.state.inputSearch)
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=5mioeMFTkhOA8A2JSAbf6RmYwPHN9eME&q=${this.state.inputSearch}&limit=10`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ songs: data })
        console.log(this.state.songs)
      })
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.inputSearch}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.songs?.map((song) => {
          return (
            song && (
              <div key={song?.id}>
                {song && (
                  <div>
                    {/* <p>The rating is : {song.rating} </p> */}
                    <p>The title is : {song.title}</p>
                    {/* <Image url={song.images[0].url} /> */}
                  </div>
                )}
              </div>
            )
          )
        })}
      </div>
    )
  }
}

export default Search

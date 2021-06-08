import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      error: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }
searchError = (searchQuery) => {
    if (!searchQuery) {
      return (
          <article className="display-error">
            <h4 className="error-message">We couldn't find that artist, try something else!</h4>
          </article>
      )
    }
  }
  render()
  {
    return (
        <section className='search-bar-box'>
          <input
              className='search-input'
              type='text'
              placeholder='Search Artists'
              name='input'
              value={this.state.searchQuery}
              onChange={this.handleChange}/>
          <Link to={`/artist:${this.state.searchQuery}`}>
            <button className='search-btn'>Search</button>
          </Link>
        </section>
    )
  }
}
export default SearchBar;

import React, { Component } from 'react';
import { searchData } from '../../actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchData(this.state.searchWord)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ searchWord: '' })
  }
//   to trigger pete's styles of the second search bar styles folder <div className='search-container'>
  render() {
    return (
        <section className='search-bar-box' >
          <input
              className='search-input'
              type='text'
              placeholder='Search artists...'
              id='searchWord'
              name='searchWord'
              value={this.state.searchWord}
              onChange={this.handleChange}
          />
          <button className='search-btn' onClick={this.handleSubmit}>Search</button>
        </section>
    )
  }
}

export default connect(null, {searchData})(SearchBar)

import React, { Component, useState } from 'react';
import { searchData } from '../../actions/index';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
      this.setState({
        searchQuery: event.target.value
      });
    }


    render()
    {
      return (
          // <Link to={`/artist:${searchQuery}`} id={searchQuery}>
          <form className='search-bar-box'>
            <input
                className='search-input'
                type='text'
                placeholder='Search Artists'
                name='input'
                value={this.state.searchQuery} onChange={this.handleChange}/>
            <Link to={`/artist:${this.state.searchQuery}`}>
              <button className='search-btn'>Search</button>
            </Link>
          </form>

      )
    }
  }


export default SearchBar;
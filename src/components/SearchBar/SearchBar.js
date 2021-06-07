import React, { Component, useState } from 'react';
import { searchData } from '../../actions/index';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SearchBar()  {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  
    return (
        <Link to={`/artist:${searchTerm}`} id={searchTerm}>
        <form className='search-bar-box'>
          <input 
              className='search-input'
              type='text'
              placeholder='Search Artists'
              name='input'
              value={searchTerm}
              onChange={handleChange}
          />
        </form>
          </Link>
        
    )
  }
  

export default SearchBar;
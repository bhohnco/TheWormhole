import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
  return (
      <ul>
        {props.filteredArtists && !props.filteredArtists.search_term && <h2></h2>}
        {props.filteredArtists && !props.filteredArtists.results.length && <h2></h2>}
        {props.filteredArtists && props.filteredArtists.search_term && props.filteredArtists.results.map(artist => {
          return (
              <h2 className='slide-top' key={arist.id}><li>{artist.name}</li></h2>
          )
        })}
      </ul>
  )
}

const mapStateToProps = state => {
  return {
    filteredJokes: state.filteredJokes
  }
}

export default connect(mapStateToProps)(SearchResults)
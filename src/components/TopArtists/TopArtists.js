import React from 'react';
import './TopArtists.css';

const TopArtists = () => {
  return (
    <div className='top-artists-box'>
      <h3> Top Artists in *location* </h3>
      <article className='artists-list'>
        <ol>
          <li className='top-artist'>Artist #1</li>
          <li className='top-artist'>Artist #2</li>
          <li className='top-artist'>Artist #3</li>
          <li className='top-artist'>Artist #4</li>
          <li className='top-artist'>Artist #5</li>
          <li className='top-artist'>Artist #6</li>
          <li className='top-artist'>Artist #7</li>
          <li className='top-artist'>Artist #8</li>
          <li className='top-artist'>Artist #9</li>
          <li className='top-artist'>Artist #10</li>
        </ol>
      </article>
    </div>
  )
}

export default TopArtists;
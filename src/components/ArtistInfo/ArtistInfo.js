import React from 'react';
import './ArtistInfo.css';

const ArtistInfo = () => {
  return (
    <article className='artist-info'>
      <div className='artist-img-box'>
        *artist image here*
      </div>
      <div className='artist-text-box'>
        <h3>artist name</h3>
        <p>artist summary</p>
        <p>artist bio</p>
      </div>
    </article>

  )
}

export default ArtistInfo;
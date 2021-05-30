import React from 'react';

const ArtistTracks = () => {
  return (
    <article className='artist-tracks-box'>
      <h3> Top Tracks by *artist* </h3>
      <div className='artist-tracks-list'>
        <ol>
          <li className='artist-track'>Track #1</li>
          <li className='artist-track'>Track #2</li>
          <li className='artist-track'>Track #3</li>
          <li className='artist-track'>Track #4</li>
          <li className='artist-track'>Track #5</li>
          <li className='artist-track'>Track #6</li>
          <li className='artist-track'>Track #7</li>
          <li className='artist-track'>Track #8</li>
          <li className='artist-track'>Track #9</li>
          <li className='artist-track'>Track #10</li>
        </ol>
      </div>
    </article>
  )
}

export default ArtistTracks;
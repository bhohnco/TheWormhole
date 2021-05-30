import React from 'react';

const TopTracks = () => {
  return (
    <article className='top-tracks-box'>
      <h3> Top Tracks in *location* </h3>
      <div className='tracks-list'>
        <ol>
          <li className='top-track'>Track #1</li>
          <li className='top-track'>Track #2</li>
          <li className='top-track'>Track #3</li>
          <li className='top-track'>Track #4</li>
          <li className='top-track'>Track #5</li>
          <li className='top-track'>Track #6</li>
          <li className='top-track'>Track #7</li>
          <li className='top-track'>Track #8</li>
          <li className='top-track'>Track #9</li>
          <li className='top-track'>Track #10</li>
        </ol>
      </div>
    </article>
  )
}

export default TopTracks;
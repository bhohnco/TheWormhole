import React from 'react';

const TopArtists = ({topArtists}) => {

  const artistNames = topArtists.topartists.artist.map(elem => {
    return elem.name;
  });

  console.log(artistNames);

  return (
    <article className='top-artists-box'>
      <h3> Top Artists in *location* </h3>
      <div className='artists-list'>
        <ol>
          <li className='top-artist'>{artistNames[0]}</li>
          <li className='top-artist'>{artistNames[1]}</li>
          <li className='top-artist'>{artistNames[2]}</li>
          <li className='top-artist'>{artistNames[3]}</li>
          <li className='top-artist'>{artistNames[4]}</li>
          <li className='top-artist'>{artistNames[5]}</li>
          <li className='top-artist'>{artistNames[6]}</li>
          <li className='top-artist'>{artistNames[7]}</li>
          <li className='top-artist'>{artistNames[8]}</li>
          <li className='top-artist'>{artistNames[9]}1</li>
        </ol>
      </div>
    </article>
  )
}

export default TopArtists;
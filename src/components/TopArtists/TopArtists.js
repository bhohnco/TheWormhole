import React from 'react';

const TopArtists = ({ topArtists }) => {
  const artistNames = topArtists.topartists.artist.map(elem => {
    return elem.name;
  });

  return (
    <article className='top-artists-box'>
      <h3> Top Artists in *location* </h3>
      <div className='artists-list'>
        <ol className='top-artist'>
          <li >{artistNames[0]}</li>
          <li >{artistNames[1]}</li>
          <li >{artistNames[2]}</li>
          <li >{artistNames[3]}</li>
          <li >{artistNames[4]}</li>
          <li >{artistNames[5]}</li>
          <li >{artistNames[6]}</li>
          <li >{artistNames[7]}</li>
          <li >{artistNames[8]}</li>
          <li >{artistNames[9]}1</li>
        </ol>
      </div>
    </article>
  )
}
export default TopArtists;

import React from 'react';

const TopArtists = ({topArtists}) => {

  const filteredArtists = topArtists.topartists.artist.reduce((topTen, elem) => {
    if (topArtists.topartists.artist.indexOf(elem) < 10) {
      topTen.push(elem);
    }
    return topTen;
  }, []);

  const artistCards = filteredArtists.map(artist => {
    return (
        <p id={artist.mbid} key={artist.mbid} className='top-artist-card'>
          <h3>{artist.name}</h3>
          <img alt='artist-portrait'></img>
        </p>
    )
  });

  console.log(artistCards);

  return (
    <article className='top-artists-box'>
      <h3> Top Artists in *location* </h3>
      <div className='artists-list'>
        {artistCards}
      </div>
    </article>
  )
}

export default TopArtists;
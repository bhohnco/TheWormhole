import React from 'react';

const TopArtists = ({ location, topArtists, retrieveArtistImage }) => {

  const filteredArtists = topArtists.topartists.artist.reduce((topTen, elem) => {
    if (topArtists.topartists.artist.indexOf(elem) < 10) {
      topTen.push(elem);
    }
    return topTen;
  }, []);

  /****** DON'T RUN BLOCK UNTIL WE'VE FIGURED OUT 'CORS' ISSUE ******/
      // filteredArtists.forEach(artist => {
      //   const imageObj = retrieveArtistImage(artist.mbid);
      //   /* artist.image = imageObj.PATH */
      //   artist.image = imageObj;
      // });
      // console.log(filteredArtists);

  const artistCards = filteredArtists.map(artist => {
        return (
            <article id={artist.mbid} key={artist.mbid} className='top-artist-card'>
              <p>{artist.name}</p>
              <img alt='artist-portrait'></img>
            </article>
        )
      });

  console.log(artistCards);

  return (
      <section className='top-artists-box'>
        <h3> Top Artists in {location} </h3>
        <div className='artists-list'>
          {artistCards}
        </div>
      </section>
  )
}

/*
CONSOLE ERROR:
Access to fetch at 'http://musicbrainz.org/ws/2/artist/5441c29d-3602-4898-b1a1-b77fa23b8e50?inc=url-rels&fmt=json'
from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
header is present on the requested resource. If an opaque response serves your needs,
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
*/

export default TopArtists;
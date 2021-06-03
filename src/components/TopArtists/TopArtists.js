import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { artists } from '../../actions';
// import artistsData from './top-artists-data.json';
import apiCalls from '../../utilities/apiCalls';

const TopArtists = ({ location }) => {
  const dispatch = useDispatch();
  // const data = artistsData.topartists.artist;
  
  const filterArtists = async (data) => {
    const topArtists = await data.reduce((topTen, artistObj) => {
      if (data.indexOf(artistObj) < 10) {
        topTen.push(artistObj);
      }
      return topTen;
    }, []);
    // console.log(topArtists)
    return topArtists;
  }

  const fetchArtistsData = async () => {
    const apiData = await apiCalls.getTopArtists(location.string);
    const allArtists = await apiData.topartists.artist;
    const filtered = await filterArtists(allArtists);
    await dispatch(artists(filtered));
  }

  let topArtists = {};
  let artistCards = {};
  
  const buildCards = (topArtists) => topArtists.map(artist => {
    return (
        <article id={artist.mbid} key={artist.mbid} className='top-artist-card'>
          <p>{artist.name}</p>
          <img alt='artist-portrait'></img>
        </article>
    )
  });

  fetchArtistsData()
    .then ( 
      topArtists = useSelector(state => state.topArtists),
    )
    .then(
      artistCards = buildCards(topArtists),
    );

  if (!artistCards) {
    return (
      <section className='top-artists-box'>
        <p className='message'>Page Loading</p>
      </section>
    )
  } else {

    return (
        <section className='top-artists-box'>
          <h3> Top Artists in {location.name} </h3>
          <div className='artists-list'>
            {artistCards}
          </div>
        </section>
    )
  }

}

// retrieveArtistImage = (id) => {
//   apiCalls.getArtistImage(id)
//     .then(data => {
//       // this.setState({ selectedArtistImage: data })
//       return data;
//     })
//     .catch(error => {
//       console.log(error);
//       this.setState({ error: error.message })
//     })
// }

export default TopArtists;

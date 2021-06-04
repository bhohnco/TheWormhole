import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { artists, image } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const TopArtists = ({ location }) => {

  const dispatch = useDispatch();

  const [artistCards, setArtistCards] = useState([]);
  const topArtists = useSelector(state => state.topArtists);

  useEffect(() => {
    fetchArtistsData()
  }, []);

  useEffect(() => {
    setArtistCards(buildCards(topArtists))
  }, [topArtists]);

  const fetchArtistsData = async () => {
    const apiData = await apiCalls.getTopArtists(location.string);
    const allArtists = apiData.topartists.artist;
    const filtered = filterArtists(allArtists);
    // await fetchArtistImage(filtered);
    dispatch(artists(filtered));
  }

  const filterArtists = (data) => {
    const topArtists = data.reduce((topTen, artistObj) => {
      if (data.indexOf(artistObj) < 10) {
        topTen.push(artistObj);
      }
      return topTen;
    }, []);
    return topArtists;
  }

  const buildCards = (topArtists) => topArtists.map(artist => {
    return (
        <article id={artist.mbid} key={artist.mbid} className='top-artist-card'>
          <p>{artist.name}</p>
          <img alt='artist-portrait'></img>
        </article>
    )
  });

  console.log(artistCards);

  return (
    topArtists.length < 1 ? 
      <section className='top-artists-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section className='top-artists-box'>
        <h3> Top Artists in {location.name} </h3>
        <div className='artists-list'>
          {artistCards}
        </div>
      </section>
  )
}

export default TopArtists;

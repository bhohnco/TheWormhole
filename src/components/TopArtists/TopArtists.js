import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { artists } from '../../actions';
import { getTopArtists } from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import images from '../../utilities/artistImages';

const TopArtists = () => {

  const dispatch = useDispatch();

  const [artistCards, setArtistCards] = useState([]);

  const location = useSelector(state => state.location);
  const topArtists = useSelector(state => state.topArtists);

  useEffect(() => {
    fetchArtistsData()
  }, []);

  useEffect(() => {
    fetchArtistsData()
  }, [location]);

  useEffect(() => {
    if (topArtists.length > 1) {
      setArtistCards(buildCards(topArtists))
    }
  }, [topArtists]);

  const fetchArtistsData = async () => {
    const apiData = await getTopArtists(location.string);
    if (apiData) {
      const allArtists = apiData.topartists.artist;
      const filtered = filterArtists(allArtists);
      dispatch(artists(filtered));
    }
  }

  const filterArtists = (data) => {
    const topArtists = data.reduce((topTen, artistObj) => {
      if (data.indexOf(artistObj) < 8) {
        topTen.push(artistObj);
      }
      return topTen;
    }, []);
    return topArtists;
  }

  const buildCards = (topArtists) => topArtists.map(artist => {

    let nameString = artist.name.replaceAll(' ', '+');

    return (
      <article className='top-artist-card'>
        <p className='top-artist-name'>{artist.name}</p>
        <Link to={`/artist:${nameString}`} id={nameString} className='link-container'>
          <div className='top-artist-image' id={artist.mbid} key={artist.mbid} style={{ backgroundImage: `url(${utils.getRandomElement(images)})`}}></div>
        </Link>
      </article>
    )
  });

  return (
    topArtists.length < 1 ?
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section className='top-artists-box'>
        <h3>Top Artists</h3>
        <div className='artists-list'>
          {artistCards}
        </div>
      </section>
  )
}

export default TopArtists;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { artists, image } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const TopArtists = () => {

  const dispatch = useDispatch();

  const [artistCards, setArtistCards] = useState([]);

  const location = useSelector(state => state.location);
  const topArtists = useSelector(state => state.topArtists);
  // const images = useSelector(state => state.images);

  useEffect(() => {
    fetchArtistsData()
  }, []);

  useEffect(() => {
    if (topArtists.length > 1) {
      setArtistCards(buildCards(topArtists))
    }
  }, [topArtists]);

  const fetchArtistsData = async () => {
    const apiData = await apiCalls.getTopArtists(location.string);
    if (apiData) {
      const allArtists = apiData.topartists.artist;
      const filtered = filterArtists(allArtists);
      dispatch(artists(filtered));
    }
  }

  const fetchArtistImageObject = async (id) => {
    // const imageObj = await apiCalls.getArtistImage(id);
    // if (imageObj) {
    //   dispatch(image(locateImageURL(imageObj)))
    // }
  }

  const locateImageURL = (imageObj) => {
    const imageKeys = Object.keys(imageObj.relations);
    let imageURL = '';

    imageKeys.forEach(key => {
      if (imageObj.relations[key].type === 'image') {
        imageURL = imageObj.relations[key].url.resource;
      }
    });

    return imageURL;
  }

  const filterArtists = (data) => {
    const topArtists = data.reduce((topTen, artistObj) => {
      if (data.indexOf(artistObj) < 10) {
        fetchArtistImageObject(artistObj.mbid);
        topTen.push(artistObj);
      }
      return topTen;
    }, []);
    // console.log(topArtists)
    return topArtists;
  }

  const buildCards = (topArtists) => topArtists.map(artist => {

    // console.log(images[topArtists.indexOf(artist)])
    // src='https://commons.wikimedia.org/wiki/File:The_Weeknd_2015.jpg'

    let nameString = artist.name.replaceAll(' ', '+');

    return (
      <article id={artist.mbid} key={artist.mbid} className='top-artist-card'>
        <p>{artist.name}</p>
        <Link to={`/artist:${nameString}`} id={nameString} className='link-container'>
          <img alt='artist-portrait'></img>
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
        <h3> Top Artists: <br></br> {location.name} </h3>
        <div className='artists-list'>
          {artistCards}
        </div>
      </section>
  )
}

export default TopArtists;

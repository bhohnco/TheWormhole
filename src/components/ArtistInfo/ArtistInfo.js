import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { artistInfo } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const ArtistInfo = ({ id }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("HELLO ", id);
  }, []);

  const currentArtist = useSelector(state => state.currentArtist);
  

  useEffect(() => {
    fetchArtistData(currentArtist.id);
  }, []);

  const fetchArtistData = async (artistName) => {
    const newInfo = await apiCalls.getArtistInfo(artistName);
    dispatch(artistInfo(newInfo.artist));
  }

  return (

    !currentArtist.name ? 
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section id={currentArtist.mbid} className='artist-info fade-in'>
        <div className='artist-img-box'>
          *artist image here*
        </div>
        <h3 className='artist-name'>{currentArtist.name}</h3>
        <div className='artist-text-box'>
          <p className='artist-summary'>{currentArtist.bio.summary}</p>
          <p className='artist-bio'>{currentArtist.bio.content}</p>
        </div>
      </section>
  )
}

export default ArtistInfo;
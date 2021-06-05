import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singleArtistInfo } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const ArtistInfo = () => {

  const dispatch = useDispatch();

  const currentArtist = useSelector(state => state.currentArtist);
  
  let artistName = 'David+Bowie';

  useEffect(() => {
    fetchArtistData(artistName);
  }, [artistName]);

  const fetchArtistData = async (artistName) => {
    const artistInfo = await apiCalls.getArtistInfo(artistName);
    dispatch(singleArtistInfo(artistInfo.artist));
  }

  return (

    !currentArtist.name ? 
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section className='artist-info fade-in'>
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
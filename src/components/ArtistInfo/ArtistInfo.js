import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { current, info } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const ArtistInfo = ({ }) => {

  // how do we retrieve artist name from "card click" 
  // and assign to 'currentCard' in the store?
  // once we do, we can delete the 1st useEffect() function 
  // and run the 2nd on page load

  const dispatch = useDispatch();
  
  const currentArtist = useSelector(state => state.currentArtist);
  const artistInfo = useSelector(state => state.artistInfo);

  ////// TEMP FUNCTION
  useEffect(() => {
    const artistName = "David Bowie";
    dispatch(current(artistName));
  }, []);
  //////
  
  useEffect(() => {
    if (currentArtist.length > 0) {
      let nameString = currentArtist.replaceAll(' ', '+');
      fetchArtistData(nameString);
    }
  }, [currentArtist]);

  const fetchArtistData = async (artistName) => {
    const newInfo = await apiCalls.getArtistInfo(artistName);
    if (newInfo) {
      dispatch(info(newInfo.artist));
    }
  }

  return (

    !artistInfo.name ? 
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section id={artistInfo.mbid} className='artist-info fade-in'>
        <div className='artist-img-box'>
          *artist image here*
        </div>
        <h3 className='artist-name'>{artistInfo.name}</h3>
        <div className='artist-text-box'>
          <p className='artist-summary'>{artistInfo.bio.summary}</p>
          <p className='artist-bio'>{artistInfo.bio.content}</p>
        </div>
      </section>
  )
}

export default ArtistInfo;
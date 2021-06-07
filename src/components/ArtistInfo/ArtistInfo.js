import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { info } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const ArtistInfo = ({ id }) => {

  const dispatch = useDispatch();
  const artistInfo = useSelector(state => state.artistInfo);

  const [ , path ]  = id.split(':');

  useEffect(() => {
    fetchArtistData(path);
  }, []);

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
        <a className='artist-name' href={artistInfo.url}>{artistInfo.name}</a>
        <div className='artist-text-box'>
          <p style={{whiteSpace: "pre-line"}} className='artist-bio'>{artistInfo.bio.content}</p>
        </div>
      </section>
  )
}

export default ArtistInfo;
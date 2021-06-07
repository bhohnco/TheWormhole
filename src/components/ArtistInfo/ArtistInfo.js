import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { info } from '../../actions';
import apiCalls from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import concert from '../../assets/images/artists/concert-stock-photo.jpeg';

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
          <img className='artist-image' src={concert} alt='selected artist'/>
        </div>
        <a className='artist-name' href={artistInfo.url}>{artistInfo.name}</a>
        <div className='artist-text-box'>
          <h3 className='artist-bio-title'>Artist Biography</h3>
          <p style={{whiteSpace: "pre-line"}} className='artist-bio'>
            {utils.removeLinkInBio(artistInfo.bio.content)}
          </p>
        </div>
      </section>
  )
}

export default ArtistInfo;
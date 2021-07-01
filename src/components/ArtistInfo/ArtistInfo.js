import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { info } from '../../actions';
import { getArtistInfo} from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import concert from '../../assets/images/concert-stock-photo.jpeg';

const ArtistInfo = ({ id }) => {

  const dispatch = useDispatch();
  const artistInfo = useSelector(state => state.artistInfo);

  const [ , path ]  = id.split(':');

  useEffect(() => {
    fetchArtistData(path);
  }, []);

  const fetchArtistData = async (artistName) => {
    const newInfo = await getArtistInfo(artistName);
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
      <section className='artist-info fade-in' id={artistInfo.mbid}>
        <div className='artist-img-box' style={{ backgroundImage: `url(${concert})`}}>
          <a className='artist-name' href={artistInfo.url}>{artistInfo.name}</a>
        </div>
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

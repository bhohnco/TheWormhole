import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { info } from '../../actions';
import { getArtistInfo} from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import artistImageData from '../../utilities/artistsDataset';
import concert from '../../assets/images/concert-stock-photo.jpeg';

const ArtistInfo = ({ id }) => {

  const dispatch = useDispatch();
  const artistInfo = useSelector(state => state.artistInfo);

  const [ , path ]  = id.split(':');

  useEffect(() => {
    fetchArtistData(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArtistData = async (artistName) => {
    const newInfo = await getArtistInfo(artistName);
    const updatedInfo = findArtistImage(newInfo);
    if (!updatedInfo.link) {
      updatedInfo.link = concert;
    }
    if (updatedInfo.link) {
      dispatch(info(updatedInfo));
    }
  }

  const findArtistImage = (newInfo) => {
    artistImageData.forEach(artist => {
      if (artist.name === newInfo.artist.name) {
        newInfo.artist.link = artist.link;
      }
    });
    return newInfo.artist;
  }

  return (
    !artistInfo.name ?
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section className='artist-info fade-in' id={artistInfo.mbid}>
        <div className='artist-img-box' style={{ backgroundImage: `url(${artistInfo.link})`}}>
          <div className='artist-image-overlay'>
            <a className='artist-name' href={artistInfo.url}>{artistInfo.name}</a>
          </div>
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

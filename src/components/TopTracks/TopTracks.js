import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tracks } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const TopTracks = () => {

  const dispatch = useDispatch();

  const location = useSelector(state => state.location);
  const [trackList, setTrackList] = useState([]);
  const topTracks = useSelector(state => state.topTracks);

  useEffect(() => {
    fetchTracksData()
  }, []);

  useEffect(() => {
    fetchTracksData()
  }, [location]);

  useEffect(() => {
    if (topTracks.length > 1) {
      setTrackList(buildTrackList(topTracks))
    }
  }, [topTracks]);

  const fetchTracksData = async () => {
    const apiData = await apiCalls.getTopTracks(location.string);
    const allTracks = apiData.tracks.track;
    const filtered = filterTracks(allTracks);

    dispatch(tracks(filtered));
  }

  const filterTracks = (data) => {
    const topTracks = data.reduce((topTen, trackObj) => {
      if (data.indexOf(trackObj) < 10) {
        topTen.push({ url: trackObj.url, artist: trackObj.artist.name, title: trackObj.name});
      }
      return topTen;
    }, []);
    return topTracks;
  }

  const buildTrackList = (topTracks) => topTracks.map(track => {

    return (
      <li className='top-track' key={topTracks.indexOf(track)}>
        <span>{track.artist}</span>
        <br></br>
        <a href={track.url}>{track.title}</a>
      </li>
    )
  });

  return (
    topTracks.length < 1 ?
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section className='top-tracks-box'>
        <h3>Top Tracks</h3>
        <div className='tracks-list'>
          <ol>
            {trackList}
          </ol>
        </div>
      </section>
  )
}

export default TopTracks;

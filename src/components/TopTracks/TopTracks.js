import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tracks } from '../../actions';
import tracksData from './top-tracks-data.json';
import apiCalls from '../../utilities/apiCalls';

const TopTracks = ({ location }) => {
  const dispatch = useDispatch();

  const filterTracks = async (data) => {
    const topTracks = await data.reduce((topTen, trackObj) => {
      if (data.indexOf(trackObj) < 10) {
        topTen.push({artist: trackObj.artist.name, title: trackObj.name, key: trackObj.mbid});
      }
      return topTen;
    },[])
    return topTracks;
  } 

  const fetchTracksData = async () => {
    const apiData = await apiCalls.getTopTracks(location.string);
    const allTracks = await apiData.tracks.track;
    const filtered = await filterTracks(allTracks);
    await dispatch(tracks(filtered));
  }

  let topTracks = {};
  let trackList = {};

  const buildTrackList = (topTracks) => topTracks.map(track => {
    return (
      <li key={track.mbid}>{track.artist} - "{track.title}"</li>
    )
  });

  // fetchTracksData()
  //   .then (
  //     topTracks = useSelector(state => state.topTracks),
  //   )
  //   .then(
  //     trackList = buildTrackList(topTracks),
  //   );

  if (!trackList) {
    return (
      <section className='top-tracks-box'>
        <p className='message'>Page Loading</p>
      </section>
    )
  } else {

    return (
      <article className='top-tracks-box'>
        <h3> Top Tracks in {location.name} </h3>
        <div className='tracks-list'>
          <ol>
            {trackList}
          </ol>
        </div>
      </article>
    )
  }
}

export default TopTracks;


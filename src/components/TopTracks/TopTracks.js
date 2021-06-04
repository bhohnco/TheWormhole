import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tracks } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const TopTracks = ({ location }) => {

  const dispatch = useDispatch();

  const [trackList, setTrackList] = useState([]);

  const topTracks = useSelector(state => state.topTracks);

  useEffect(() => {
    fetchTracksData()
  }, []);

  useEffect(() => {
    setTrackList(buildTrackList(topTracks))
  }, [trackList]);

  const fetchTracksData = async () => {
    const apiData = await apiCalls.getTopTracks(location.string);
    const allTracks = apiData.tracks.track;
    const filtered = filterTracks(allTracks);
    
    dispatch(tracks(filtered));
  }

  const filterTracks = (data) => {
    const topTracks = data.reduce((topTen, trackObj) => {
      if (data.indexOf(trackObj) < 10) {
        topTen.push({artist: trackObj.artist.name, title: trackObj.name, key: trackObj.mbid});
      }
      return topTen;
    }, []);
    return topTracks;
  } 

  const buildTrackList = (topTracks) => topTracks.map(track => {
    return (
      <li key='{track.mbid}'>{track.artist} - "{track.title}"</li>
    )
  });

  console.log(trackList);

  return (

    topTracks.length < 1 ? 
      <section className='top-tracks-box'>
        <p className='message'>Page Loading</p>
      </section> 
      :
      <section className='top-tracks-box'>
        <h3> Top Tracks in {location.name} </h3>
        <div className='tracks-list'>
          <ol>
            {trackList}
          </ol>
        </div>
      </section>
  )
}

export default TopTracks;


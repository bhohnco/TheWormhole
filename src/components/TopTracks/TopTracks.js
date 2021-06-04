import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tracks } from '../../actions';
import apiCalls from '../../utilities/apiCalls';

const TopTracks = ({ location }) => {

  const dispatch = useDispatch();

  // declare 'trackList' property in component state
  // w/ empty array value and 'setTrackList' method to reassign
  const [trackList, setTrackList] = useState([]);

  // retrieve 'topTracks' from global store and assign to variable
  const topTracks = useSelector(state => state.topTracks);

  // useEffect will run functions inside only when 
  // 'state variable' ([topTracks] in this case) is modified
  useEffect(() => {
    // first we fetch our data (and assign it to store)
    fetchTracksData()
    // then we take that data from store and assign to topTracks 
    // var in local state, for temporary use in conditional rend
    setTrackList(buildTrackList(topTracks))
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
        topTen.push({artist: trackObj.artist.name, title: trackObj.name, key: trackObj.mbid});
      }
      return topTen;
    }, []);
    return topTracks;
  } 

  const buildTrackList = (topTracks) => topTracks.map(track => {
    return (
      <li key={track.mbid}>{track.artist} - "{track.title}"</li>
    )
  });

  return (

    // if local topTracks var length is less than 1 
    // (meaning both local state and global store haven't received that data yet) 
    // we render loading page. otherwise, we do have the data in state/store needed to
    //  have built our trackList HTML, so we're safe to render that instead.

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


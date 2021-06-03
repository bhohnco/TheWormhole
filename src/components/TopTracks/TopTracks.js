import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tracks } from '../../actions';
import tracksData from './top-tracks-data.json';

const TopTracks = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location.name);
  const data = tracksData.tracks.track;

  const filteredTracks = data.reduce((topTen, trackObj) => {
    if (data.indexOf(trackObj) < 10) {
      topTen.push({artist: trackObj.artist.name, title: trackObj.name});
    }
    return topTen;
  },[])

  dispatch(tracks(filteredTracks));

  return (
    <article className='top-tracks-box'>
      <h3> Top Tracks in {location} </h3>
      <div className='tracks-list'>
        <ol>
          <li >{filteredTracks[0].artist} - "{filteredTracks[0].title}"</li>
          <li >{filteredTracks[1].artist} - "{filteredTracks[1].title}"</li>
          <li >{filteredTracks[2].artist} - "{filteredTracks[2].title}"</li>
          <li >{filteredTracks[3].artist} - "{filteredTracks[3].title}"</li>
          <li >{filteredTracks[4].artist} - "{filteredTracks[4].title}"</li>
          <li >{filteredTracks[5].artist} - "{filteredTracks[5].title}"</li>
          <li >{filteredTracks[6].artist} - "{filteredTracks[6].title}"</li>
          <li >{filteredTracks[7].artist} - "{filteredTracks[7].title}"</li>
          <li >{filteredTracks[8].artist} - "{filteredTracks[8].title}"</li>
          <li >{filteredTracks[9].artist} - "{filteredTracks[9].title}"</li>
        </ol>
      </div>
    </article>
  )
}

// retrieveTopTracks = (location) => {
//   apiCalls.getTopTracks(location)
//     .then(data => {
//       this.setState({ topTracks: data })
//     })
//     .catch(error => {
//       console.log(error);
//       console.log(`Sorry, could not retrieve data for ${this.state.location.name}`);
//       this.setState({ error: error.message })
//     })
// }
//

export default TopTracks;
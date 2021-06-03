import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tracks } from '../../actions';
import apiCalls from '../../utilities/apiCalls';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import tracksData from './top-tracks-data.json';

const TopTracks = ({ location }) => {
  const dispatch = useDispatch();
  // const location = useSelector(state => state.location.name);
  // const data = tracksData.tracks.track;

  const filteredTracks = async (tracks) => {
    const allTracks = tracks.track
    const topTracks = await allTracks.reduce((topTen, trackObj) => {
      if (allTracks.indexOf(trackObj) < 10) {
        topTen.push({artist: trackObj.artist.name, title: trackObj.name});
      }
      return topTen;
    }, [])
    // console.log(topTracks)
    return topTracks
  }

  const fetchTracksData = async () => {
    const apiData = await apiCalls.getTopTracks(location.string);
    const allTracks = await apiData.tracks;
    const filtered = await filteredTracks(allTracks);
    await dispatch(tracks(filtered));
  }

  let topTracks = null;

  const buildTrackList = (topTracks) => topTracks.map(track => {
    <ol>
      <li key ={track.name} {filteredTracks[0].artist} - "{filteredTracks[0].title}"</li>
    </ol> 

    )
  })
  fetchTracksData()
      .then(
          topTracks = useSelector(state => state.topTracks),
      )
      .then(
         
      )

  if (!topTracks) {
    console.log(topTracks, "in IF statement")
    return (
        <section className='top-tracks-box'>
          <p className='message'>Page Loading</p>
        </section>
    )
  } else {
    console.log(filteredTracks, "in else statement")
    console.log("in else statement")
    return (
        <article className='top-tracks-box'>
          <h3> Top Tracks in {location} </h3>
          <div className='tracks-list'>
            <ol>
              <li>{filteredTracks[0].artist} - "{filteredTracks[0].title}"</li>
              <li>{filteredTracks[1].artist} - "{filteredTracks[1].title}"</li>
              <li>{filteredTracks[2].artist} - "{filteredTracks[2].title}"</li>
              <li>{filteredTracks[3].artist} - "{filteredTracks[3].title}"</li>
              <li>{filteredTracks[4].artist} - "{filteredTracks[4].title}"</li>
              <li>{filteredTracks[5].artist} - "{filteredTracks[5].title}"</li>
              <li>{filteredTracks[6].artist} - "{filteredTracks[6].title}"</li>
              <li>{filteredTracks[7].artist} - "{filteredTracks[7].title}"</li>
              <li>{filteredTracks[8].artist} - "{filteredTracks[8].title}"</li>
              <li>{filteredTracks[9].artist} - "{filteredTracks[9].title}"</li>
            </ol>
          </div>
        </article>
    )
  }
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


// const mapStateToProps = ({ tracks }) => ({
//   topTracks: tracks,
// })
//
// export const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     // hasErrored,
//     // isLoading,
//         tracks
//   },
//   dispatch)
// )

export default TopTracks;
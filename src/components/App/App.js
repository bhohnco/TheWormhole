import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { location } from '../../actions';
import utils from '../../utilities/utils';
import Background from '../../assets/images/black-cloth.jpeg';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';
// import { fetchTopArtists } from '../../thunks/fetchTopArtists';
// import { connect } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  const newLocation = utils.getRandomLocation();

  dispatch(location(newLocation));

// const isLoading = useSelector(state => state.isLoading);
  const locationObj = useSelector(state => state.location);

  if (!locationObj) {
    return (
      <main className='App'>
        <p className='message'>Page Loading</p>
      </main>
    )
  } else {
      return (
        <div className="App" style={{ backgroundImage: `url(${Background})`}}>
          <Header />
          <Form />
          <main className='main-section'>
            <section className='location-display'>
              <TopArtists location={locationObj}/>
              <TopTracks location={locationObj}/>
            </section>
          </main>
        </div>
      );
  }
}

export default App;


  // const mapStateToProps = ( state ) => ({
  //   topArtists: state.artists,
  //   isLoading: state.isLoading,
  //   // error: state.error,
  // })

  // const mapDispatchToProps = (dispatch) => ({
  //   topArtists: () => dispatch(fetchTopArtists())
  // });

  // export default connect(mapStateToProps, mapDispatchToProps)(App);

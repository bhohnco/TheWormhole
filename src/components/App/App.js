import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { location } from '../../actions';
import background from '../../assets/images/night-sky.jpeg';
import utils from '../../utilities/utils';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';
import ArtistInfo from '../ArtistInfo/ArtistInfo';

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
        <div className="App" style={{ backgroundImage: `url(${background})`}}>
          <Router>
            <Header />
              <Switch>
                <Route exact path='/:id'
                  render={({ match }) =>
                    <main className='main-section'>
                          <ArtistInfo id={ match.params.id }/>
                    </main>
                  }
                />
                <Route exact path="/" >
                  <Form />
                  <main className='main-section'>
                    <section className='location-display'>
                      <TopArtists />
                      <TopTracks />
                    </section>
                  </main>
                </Route>
              </Switch>
          </Router>
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

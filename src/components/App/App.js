import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { location } from '../../actions';
import background from '../../assets/images/night-sky.jpeg';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';
import ArtistInfo from '../ArtistInfo/ArtistInfo';

const App = () => {

  const dispatch = useDispatch();
  const locationObj = useSelector(state => state.location);

  useEffect(() => {
    dispatch(location(locationObj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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
                  <NavBar />
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

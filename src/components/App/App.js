import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { location } from '../../actions';
import utils from '../../utilities/utils';
import Background from '../../assets/images/black-cloth.jpeg';
import Header from '../Header/Header';
import DropDown from '../Dropdown/Dropdown';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';

<<<<<<< HEAD

=======
>>>>>>> c138ae6cb614229990b020f4017341c286f41d62
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
<<<<<<< HEAD
    console.log("LOCATION LOADED: ", locationObj);

=======
>>>>>>> c138ae6cb614229990b020f4017341c286f41d62
      return (
        <div className="App" style={{ backgroundImage: `url(${Background})`}}>
          <Header />
          <Form />
          <main className='main-section'>
            <section className='location-display'>
              {/*<TopArtists topArtists={ topArtists } />*/}
              <TopArtists location={locationObj}/>
              <TopTracks location={locationObj}/>
            </section>
          </main>
        </div>
      );
  }
<<<<<<< HEAD
  
  // const mapStateToProps = ({ setTopArtists }) => ({
  //   topArtists: setTopArtists,
  // })
  //
  // export const mapDispatchToProps = dispatch => (
  //   bindActionCreators({
  //     hasErrored,
  //     isLoading,
  //     actionGetTopArtists
  //   },
  //   dispatch)
  // )



=======
>>>>>>> c138ae6cb614229990b020f4017341c286f41d62
}

export default App;


  
  // const mapStateToProps = ( state ) => ({
  //   topArtists: state.artists,
  //   isLoading: state.isLoading,
  //   // error: state.error,
  // })


// export default connect(mapStateToProps, mapDispatchToProps)(App);

  // const mapDispatchToProps = (dispatch) => ({
  //   topArtists: () => dispatch(fetchTopArtists())
  // });
  
  // export default connect(mapStateToProps, mapDispatchToProps)(App);


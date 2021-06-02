import React, {Component} from 'react';
import apiCalls from '../../utilities/apiCalls';
import utils from '../../utilities/utils';
import countries from '../../utilities/countries';
import Background from '../../assets/images/black-cloth.jpeg';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: this.getRandomLocation(),
      topArtists: [],
      imageObjects: [],
      topTracks: [],
      selectedArtistID: '',
      input: '',
      error: ''
    }
  }

  componentDidMount() {
    this.retrieveTopArtists(this.state.location.string);
    this.retrieveTopTracks(this.state.location.string);
  }

  getRandomLocation = () => {
    const randomCountry= utils.getRandomElement(countries)
    const formattedStr = utils.formatLocationStr(randomCountry);

    return { name: randomCountry, string: formattedStr };
  }

  retrieveTopArtists = (location) => {
    apiCalls.getTopArtists(location)
      .then(data => {
        this.setState({topArtists: data})
        this.retrieveArtistImages(data);
      })
      .catch(error => {
        console.log(error);
        this.setState({error: error.message})
      })
    }

    fetchArtistImage = (id) => {
      apiCalls.getArtistImage(id)
        .then(datum => {
          this.setState( { imageObjects: [ ...this.state.imageObjects, datum ] } );
        });
    }
    
    retrieveArtistImages = (data) => {

      data.topartists.artist.forEach(artist => {
        const index = data.topartists.artist.indexOf(artist);
        const id = artist.mbid;
        // const id = 'f27ec8db-af05-4f36-916e-3d57f91ecf5e';
        
        if (index < 10) {
          this.fetchArtistImage(id);
        };
      });
    }

  retrieveTopTracks = (location) => {
    apiCalls.getTopTracks(location)
      .then(data => {
        this.setState({ topTracks: data })
      })
      .catch(error => {
        console.log(error);
        console.log(`Sorry, could not retrieve data for ${this.state.location.name}`);
        this.setState({ error: error.message })
      })
  }

  
  render() {

    if (this.state.error) {
      console.log(this.state.error);
      return <h2 className='message'>{this.state.error}</h2>
    }

    if (!this.state.error < 1 && (this.state.topArtists.length < 1 || this.state.topTracks.length < 1)) {
      return <h2 className='message'>Page Loading</h2>
    }

    if (this.state.imageObjects.length < 1) {
      return <h2 className='message'>Page Loading</h2>
    }

    else {
      return (
        <div className="App" style={{ backgroundImage: `url(${Background})`}}>
          <Header />
          <Form />
          <main className='main-section'>
            <section className='location-display'>
              <TopArtists location={this.state.location.name} topArtists={this.state.topArtists} imageObjects={this.state.imageObjects}/>
              <TopTracks location={this.state.location.name} topTracks={this.state.topTracks}/>
            </section>

          </main>
        </div>
      );
    }
  }
}

export default App;

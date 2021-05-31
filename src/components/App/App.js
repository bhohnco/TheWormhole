import React, {Component} from 'react';
import { Provider } from "react-redux";
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
      topTracks: [],
      selectedArtistID: '',
      // selectedArtistImage: '',
      input: '',
      error: ''
    }
  }

  componentDidMount = () => {
    console.log(this.state.location);

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
          console.log(data);
          this.setState({topArtists: data})
        })
        .catch(error => {
          console.log(error);
          this.setState({error: error.message})
        })
  }

  retrieveTopTracks = (location) => {
    apiCalls.getTopTracks(location)
        .then(data => {
          console.log(data);
          this.setState({ topTracks: data })
        })
        .catch(error => {
          console.log(error);
          console.log(`Sorry, could not retrieve data for ${this.state.location.name}`);
          this.setState({ error: error.message })
        })
  }

  retrieveArtistImage = (id) => {
    apiCalls.getArtistImage(id)
        .then(data => {
          console.log(data);
          // this.setState({ selectedArtistImage: data })
          return data;
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: error.message })
        })
  }


  render() {

    if (this.state.error > 1) {
      console.log(this.state.error);
      return <h2 className='message'>{this.state.error}</h2>
    }

    if (this.state.error < 1 && (this.state.topArtists < 1 || this.state.topTracks < 1)) {
      return <h2 className='message'>Page Loading</h2>
    }

    else {
      return (
          <div className="App" style={{ backgroundImage: `url(${Background})`}}>
            <Header />
            <Form />
            <main className='main-section'>
              <section className='location-display'>
                <TopArtists location={this.state.location.name} topArtists={this.state.topArtists} retrieveArtistImage={this.retrieveArtistImage}/>
                <TopTracks location={this.state.location.name} topTracks={this.state.topTracks}/>
              </section>
              {/*
            <section className='artist-display'>
              <ArtistInfo />
              <ArtistTracks />
            </section>
            */}
            </main>
          </div>
      );
    }
  }
}

export default App;
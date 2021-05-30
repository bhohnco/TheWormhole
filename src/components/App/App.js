import React, {Component} from 'react';
import apiCalls from '../../utilities/apiCalls';
import Background from '../../assets/images/black-cloth.jpeg';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topArtists: [],
      topTracks: [],
      selectedArtist: '',
      selectedArtistImage: '',
      input: '',
      error: ''
    }
  }

  componentDidMount = () => {
    this.retrieveTopTracks();
    this.retrieveTopArtists();
  }

  retrieveTopArtists = () => {
    apiCalls.getTopArtists()
      .then(data => {
        console.log(data);
        this.setState({topArtists: data})
      })
      .catch(error => {
        console.log(error);
        this.setState({error: error.message})
      })
  }
  
  retrieveTopTracks = () => {
    apiCalls.getTopTracks()
      .then(data => {
        console.log(data);
        this.setState({ topTracks: data })
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

    if (this.state.error < 1 && this.state.topTracks < 1) {
      return <h2 className='message'>Page Loading</h2>
    }

    if (this.state.error < 1 && this.state.topArtists < 1) {
      return <h2 className='message'>Page Loading</h2>
    }

    else {
      return (
        <div className="App" style={{ backgroundImage: `url(${Background})`}}>
          <Header />
          <Form />
          <main className='main-section'>
            <section className='location-display'>
              <TopArtists topArtists={this.state.topArtists}/>
              <TopTracks topTracks={this.state.topTracks}/>
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

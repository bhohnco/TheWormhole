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
    apiCalls.getTopArtists()
      .then(data => {
        this.setState({topArtists: data})
      })
      .catch(error => {
        console.log(error);
        this.setState({error: error.message})
      })
      console.log(this.state.topArtists);
  }

 showTopTracks = async () => {
     apiCalls.getTopTracks()
      .then(data => {
        this.setState({topTracks: data.topTracks})
      })
      .catch(error => {
        console.log(error);
        this.setState({error: error.message})
      })
  }

  render() {

    if (this.state.error > 1) {
      console.log(this.state.error);
      return <h2 className='message'>{this.state.error}</h2>
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
              <TopTracks />
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

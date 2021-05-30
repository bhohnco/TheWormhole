import React, {Component} from 'react';
import { getTopArtists, getTopTracks } from '../../utilities/apiCalls'
import React, { Component } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topArtists: [],
      topTracks: [],
      selectedArtist: null,
      selectedArtistImage: null,
      input: "",
      error: ""
    }
  }

  componentDidMount = async () => {
    await getTopArtists()
        .then(data => {
          this.setState({topArtists: data.topArtists})
        })
        .catch(error => {
          this.setState({error: error.message})
        })
    console.log(this.state.topArtists)
  }

 showTopTracks = async () => {
    await getTopTracks()
        .then(data => {
          this.setState({topTracks: data.topTracks})
        })
        .catch(error => {
          this.setState({error: error.message})
        })
    console.log(this.state.topTracks)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <main className='main-section'>
          <section className='nation-display'>
            <TopArtists />
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

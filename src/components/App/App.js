import React, { Component } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      nation: '',
      topArtists: '',
      topTracks: ''
    }
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

export default App;

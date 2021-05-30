import React, { Component } from 'react';
import Background from '../../assets/images/black-cloth.jpeg';
import Header from '../Header/Header';
import Form from '../Form/Form';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';

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
      <div className="App" style={{ backgroundImage: `url(${Background})`}}>
        <Header />
        <Form />
        <main className='main-section'>
          <section className='nation-display'>
            <TopTracks />
            <TopArtists />
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

import React, { Component } from 'react';

class TopArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTenArtists: [],
      cards: [],
    }
  }

  async componentDidMount() {
    await this.getFilteredArtists();
  }

  async getFilteredArtists() {
    const topTen = await this.props.topArtists.topartists.artist.reduce((topTen, elem) => {
      if (this.props.topArtists.topartists.artist.indexOf(elem) < 10) {
        topTen.push(elem);
      }
      return topTen;
    }, []);
    this.setState({ topTenArtists: topTen });
    this.setState({ cards: this.getArtistCards() });
  }

  findArtistImage(artist) {
    
    let imagePath = '';

    this.props.imageObjects.forEach(elem => {

      if (elem.id === artist.mbid) {
        let index = this.props.imageObjects.indexOf(elem);
        const imageObjKeys = Object.keys(this.props.imageObjects[index].relations);

        imageObjKeys.forEach(key => {
          if (this.props.imageObjects[index].relations[key].type === 'image') {
            console.log(this.props.imageObjects[index].relations[key].url.resource);
            imagePath = this.props.imageObjects[index].relations[key].url.resource;
          }
        });

      }
    });
    
    return imagePath;
  }

  getArtistCards() {
    const artistCards = this.state.topTenArtists.map(artist => {
      return (
          <article id={artist.mbid} key={artist.mbid} className='top-artist-card'>
            <p>{artist.name}</p>
            <img src={this.findArtistImage(artist)} alt='artist-portrait'></img>
          </article>
      )
    }); 

    return artistCards;
  }

  render() {

    if (this.state.cards < 1) {
      return <h2 className='message'>Data Loading</h2>
    }

    else {
      return (
        <section className='top-artists-box'>
          <h3> Top Artists in {this.props.location} </h3>
          <div className='artists-list'>
            {this.state.cards}
          </div>
        </section>
      )
    }
  }

}

/*
CONSOLE ERROR:
Access to fetch at 'http://musicbrainz.org/ws/2/artist/5441c29d-3602-4898-b1a1-b77fa23b8e50?inc=url-rels&fmt=json'
from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
header is present on the requested resource. If an opaque response serves your needs,
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
*/

export default TopArtists;
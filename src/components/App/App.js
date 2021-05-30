import React, {Component} from 'react';
import { getTopArtists, getTopTracks } from '../../utilities/apiCalls'
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

  // showSelectedArtist = (id) => {
  //   getSelectedArtist(id)
  //       .then(data => {
  //         this.setState({
  //           selectedArtist: data,
  //           selectedArtistImage: data
  //         })
  //       })
  //       .catch(error => {
  //         this.setState({error: error.message})
  //       })
  //   console.log(this.state)
  // }
  //
  // handleClick = event => {
  //   this.showSelectedArtist(event.target.id)
  // }

  render() {
    return (
        <div className='api-test'>
         <h3 className='top-artist'>{this.state.topArtists}</h3>
         <h3 className='top-tracks'>{this.state.topTracks}</h3>
        </div>
    )
  }

}
export default App;

// import { useSelector, useDispatch } from 'react-redux';

const apiCalls = {

  async getTopArtists(country) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    const data = await response.json();

    return data;
  },

  async getTopTracks(country) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    const data = await response.json();

    return data;
  },

  async getArtistInfo(artistName) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    const data = await response.json();
    
    return data;
  },

  async getArtistImagePage(id) {
    const response = await fetch(`http://musicbrainz.org/ws/2/artist/${id}?inc=url-rels&fmt=json`)
    const data = await response.json();

    return data;
  },

  // async getArtistImageURL() {
  //   const response = await fetch(`http://commons.wikimedia.org/wiki/File:ArianaGrandeDecember2013.jpg`)
  //   const data = await response.json();
  //   console.log(data);
  // }
}

export default apiCalls;

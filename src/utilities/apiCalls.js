// import { useSelector, useDispatch } from 'react-redux';
import utils from './utils'

const apiCalls = {

  async getTopArtists(country) {
    return await fetch(`http://ws.auioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
        .then(response => {
          if (!response.ok) {
            console.log(response)
            utils.checkForErr(response)
          } else {
            return response.json()
          }
        })
  },

  async getTopTracks(country) {
    return await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
        .then(response => {
          if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
          } else {
            return response.json()
          }
        })
  },

  async getArtistImage(id) {
    return await fetch(`http://musicbrainz.org/ws/2/artist/${id}?inc=url-rels&fmt=json`)
        .then(response => {
          if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
          } else {
            return response.json()
          }
        })
  },

  async getSelectedCountry(country){
      const topArtistSelect = fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
          .then(response => {
            if (!response.ok) {
              const message = `An error has occurred: ${response.status}`;
              throw new Error(message);
            } else {
              return response.json()
            }
          })


      const topTrackSelect = fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
          .then(response => {
            if (!response.ok) {
              const message = `An error has occurred: ${response.status}`;
              throw new Error(message);
            } else {
              return response.json()
            }
          })


      return Promise.all([topArtistSelect, topTrackSelect])
            .then(data => {
              let allData = {};
              allData.topArtistSelect = data[0];
              allData.topTrackSelect = data[1];
              console.log(allData)
              return allData;
      })
},


  async getArtistInfo(artistName) {
    return await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
        .then(response => {
          if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
          } else {
            return response.json()
          }
        })
  },

  async getArtistImagePage(id) {
    return await fetch(`http://musicbrainz.org/ws/2/artist/${id}?inc=url-rels&fmt=json`)
        .then(response => {
          if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
          } else {
            return response.json()
          }
        })
  }

  // async getArtistImageURL() {
  //   const response = await fetch(`http://commons.wikimedia.org/wiki/File:ArianaGrandeDecember2013.jpg`)
  //   const data = await response.json();
  //   console.log(data);
  // }
}

export default apiCalls;

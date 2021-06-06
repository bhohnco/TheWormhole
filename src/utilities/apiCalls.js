// import { useSelector, useDispatch } from 'react-redux';

const apiCalls = {

  async getTopArtists(country) {
    // const dispatch = useDispatch();
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    return await response.json();
  },

  async getTopTracks(country) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    return await response.json();
  },

  async getArtistImage(id) {
    const response = await fetch(`http://musicbrainz.org/ws/2/artist/${id}?inc=url-rels&fmt=json`)
    return await response.json();
  },

  async getArtistInfo(artistName) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    return await response.json();
  },

  async getSelectedCountry(country){
      const topArtistSelect = fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error(`Uh oh! There was an error fetching the artists data`)
            }
          })

      const topTrackSelect = fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error(`Uh oh! There was an error fetching the tracks data`)
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
}

}

export default apiCalls;

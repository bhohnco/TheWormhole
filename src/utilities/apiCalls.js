import { utils } from './utils.js'

const topArtistByCountryUrl = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
//"http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country={country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
const topTracksByCountryUrl = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
//http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json
const artistInfoUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=DavidBowie&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
// "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${Artist+Name}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
const artistImageUrl =  "http://musicbrainz.org/ws/2/artist/5441c29d-3602-4898-b1a1-b77fa23b8e50?inc=url-rels&fmt=json"
//"http://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels&fmt=json"


export const apiCalls = {

  async getTopArtists(country) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    const data = await response.json();
    return data

  },

  async getTopTracks(country) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    const data = await response.json();
    return data;
  },

  async getArtistImage(id) {
    const response = await fetch(`http://musicbrainz.org/ws/2/artist/${id}?inc=url-rels&fmt=json`)
    const data = await response.json();
    return data;
  },

  // async getSelectedArtist(id) {
  //   const response = await fetch(artistInfoUrl)
  //   const data = await response.json();
  //   return data;
  // },

}

export default apiCalls;

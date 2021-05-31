const topArtistByCountryUrl = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
//"http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country={country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
const topTracksByCountryUrl = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
//http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json
const artistInfoUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=DavidBowie&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
// "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${Artist+Name}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"
const artistImageUrl =  "http://musicbrainz.org/ws/2/artist/5441c29d-3602-4898-b1a1-b77fa23b8e50?inc=url-rels&fmt=json"
//"http://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels&fmt=json"


export const getTopArtists = () => {
  console.log("topTracks")
  return fetch(topArtistByCountryUrl)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Sorry, we are having trouble getting the Top Artists, please try again later.`)
        }
      })
}

export const getTopTracks = () => {
  console.log("topTracks")
  return fetch(topTracksByCountryUrl)
      .then(response => {
        if (response.ok) {
          return console.log(response.json())
        } else {
          throw new Error(`Sorry, we are having trouble getting the Top Tracks, please try again later.`)
        }
      })
}
// export const getSelectedArtist = (id) => {
//   const selectedArtistDetails = fetch(artistInfoUrl)
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         } else {
//           throw new Error(`Error, please try again!`)
//         }
//       })
//
//   const selectedArtistImage = fetch(artistImageUrl)
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         } else {
//           throw new Error(`Error, please try again!`)
//         }
//       })
//
//   return Promise.all([artistInfoUrl, artistImageUrl])
//       .then(data => {
//         let allData = {};
//         allData.selectedArtistDetails = data[0];
//         allData.selectedArtistImage = data[1];
//         return allData;
//       })
// }

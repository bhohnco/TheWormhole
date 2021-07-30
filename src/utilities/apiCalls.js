export const getTopArtists = (country) => {
  return fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    .then(response => {
      handleError(response);
      return response.json();
    })
}

export const getTopTracks = (country) => {
  return fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    .then(response => {
      handleError(response);
      return response.json();
    })
}

export const getArtistInfo = (artistName) => {
  return fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return "Error!";
      }
    })
}

const handleError = (response) => {
  if (!response.ok) {
    throw new Error()
  }
}
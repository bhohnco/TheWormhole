export const getTopArtists = (country) => {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    .then(response => response.json());
  }

export const getTopTracks = (country) => {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    .then(response => response.json());

  }

export const getArtistInfo = (artistName) => {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`)
    .then(response => response.json());

  }

  export const getArtistImagePage = async ( id) => {
    const response = await fetch(`http://musicbrainz.org/ws/2/artist/${id}?inc=url-rels&fmt=json`)
    const data = await response.json();

    return data;
  }
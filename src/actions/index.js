export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})

export const actionGetTopArtists = artists => ({
    type: 'GET_TOP_ARTIST_DATA',
    artists
})

export const actionGetTopTracks = tracks => ({
    type: 'GET_TOP_TRACKS_DATA',
    tracks
  })

export const selectedArtistID = id => ({
    type: 'SELECETED_ARTIST_ID'
    id
})

export const selectedArtistImage = id => ({
    type: 'SELECETED_ARTIST_IMAGE'
    id
})

export const hasErrored = (message) => ({
    type: 'HAS_ERRORED',
    message
})

export const searchForArtist = dispatch => ({
    onSearchTermChange: (value) =>
        dispatch({
            type: 'SEARCH_TERM_CHANGE',
            value
        })
})

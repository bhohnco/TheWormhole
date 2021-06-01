
export const actionGetTopArtist = data => ({
    type: 'GET_TOP_ARTIST_DATA',
    data
})

export const actionGetTopTracks = data => ({
    type: 'GET_TOP_TRACKS_DATA',
    data
  })

export const selectedArtistID = id => ({
    type: 'SELECETED_ARTIST_ID'
    id
})

export const selectedArtistImage = id => ({
    type: 'SELECETED_ARTIST_IMAGE'
    id
})

export const hasError = message => ({
    type: 'HAS_ERROR',
    message
})


// export const searchForArtist = dispatch => ({
//     onSearchTermChange: (value) =>
//         dispatch({
//             type: 'SEARCH_TERM_CHANGE',
//             value
//         })
// })
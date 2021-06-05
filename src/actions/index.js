export const artists = (artistsData) => {
    return {
        type: 'GET_TOP_ARTIST_DATA',
        payload: artistsData,
    }
}

export const tracks = (tracksData) => {
    return {
        type: 'GET_TOP_TRACKS_DATA',
        payload: tracksData,
    }
}

export const location = (locationChoice) => {
    return {
        type: 'GET_LOCATION',
        payload: locationChoice,
    }
}

export const image = (artistImage) => {
    return {
        type: 'GET_ARTIST_IMAGE_URL',
        payload: artistImage,
    }
}

export const isLoading = (bool) => ({
    type: 'IS_LOADING',
    bool
})

export const hasErrored = (message) => ({
    type: 'HAS_ERRORED',
    message
})

export const dropdownValues = (e, data) => ({
    type: 'DROPDOWN_VALUES',
    payload: data.value
})
// export const selectedArtistID = id => ({
//     type: 'SELECETED_ARTIST_ID',
//     id
// })
//
// export const selectedArtistImage = id => ({
//     type: 'SELECETED_ARTIST_IMAGE',
//     id
// })

// export const selectedArtistID = id => ({
//     type: 'SELECTED_ARTIST_ID'
//     id
// })

// export const selectedArtistImage = id => ({
//     type: 'SELECTED_ARTIST_IMAGE'
//     id
// })

// export const searchForArtist = dispatch => ({
//     onSearchTermChange: (value) =>
//         dispatch({
//             type: 'SEARCH_TERM_CHANGE',
//             value
//         })
// })

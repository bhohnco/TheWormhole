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

export const current = (artistName) => {
    return {
        type: 'SET_CURRENT_ARTIST_NAME',
        payload: artistName,
    }
}

export const info = (artistInfo) => {
    return {
        type: 'GET_ARTIST_INFO',
        payload: artistInfo,
    }
}

export const isLoading = (bool) => {
    return {
        type: 'IS_LOADING',
        payload: bool,
    }
}

export const hasErrored = (message) => {
    return {
        type: 'HAS_ERRORED',
        payload: message,
    }
}

// export const searchForArtist = dispatch => ({
//     onSearchTermChange: (value) =>
//         dispatch({
//             type: 'SEARCH_TERM_CHANGE',
//             value
//         })
// })
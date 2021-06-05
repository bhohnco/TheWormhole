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

export const dropdownValues = (e, data) => {
  return {
    type: 'DROPDOWN_VALUES',
    payload: data.value
  }
}

// export const dropdownValues = (selectedArtist) => {
//         return (dispatch) => {
//         fetch(`//http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${Artist+selectedArtist}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json`,
//             { headers: { "Accept": "application/json" }
//         })
//             .then(checkForError)
//             .then(data => dispatch({ type: 'DROPDOWN_SELECT', payload: data }))
//             .catch(error => alert(error))
//     }
// }


export const searchData = (searchTerm) => {
    return (dispatch) => {
        fetch(`//http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Artist+${searchTerm}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"`,
            { headers: { "Accept": "application/json" }
        })
            .then(checkForError)
            .then(data => dispatch({ type: 'DATA_SEARCHED', payload: data }))
            .catch(error => alert(error))
    }
}

const checkForError = (response) => {
    if (!response.ok) {
        throw new Error(response.message);
    } else {
        return response.json();
    }
}


// export const searchForArtist = dispatch => ({
//     onSearchTermChange: (value) =>
//         dispatch({
//             type: 'SEARCH_TERM_CHANGE',
//             value
//         })
// })

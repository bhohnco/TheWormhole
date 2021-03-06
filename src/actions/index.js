import utils from '../utilities/utils'

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

export const images = (artistImages) => {
    return {
        type: 'GET_ARTIST_IMAGE_LINKS',
        payload: artistImages,
    }
}

export const info = (artistObj) => {
    return {
        type: 'GET_ARTIST_INFO',
        payload: artistObj,
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

export const searchData = (searchTerm) => {
    return (dispatch) => {
        fetch(`//http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Artist+${searchTerm}&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json"`,
            { headers: { "Accept": "application/json" }
        })
            .then(response => utils.checkForErr(response))
            .then(data => dispatch({ type: 'DATA_SEARCHED', payload: data }))
            .catch(error => console.log('Please try this again later. Looks like our whole site exploded.'))
    }
}

// const checkForError = (response) => {
//     if (!response.ok) {
//         throw new Error(response.message);
//     } else {
//         return response.json();
//     }
// }


// export const searchForArtist = dispatch => ({
//     onSearchTermChange: (value) =>
//         dispatch({
//             type: 'SEARCH_TERM_CHANGE',
//             value
//         })
// })

// const checkForError = (response) => {
//     if (!response.ok) {
//         throw new Error(response.message);
//     } else {
//         return response.json();
//     }
// }

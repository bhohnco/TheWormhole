export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.message
    default:
      return state
  }
}

const initialState = []

export const setTopArtists = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_TOP_ARTIST_DATA':
      return action.artists
    default:
      return state
  }
}

const currentArtistReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_CURRENT_ARTIST_NAME':
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default currentArtistReducer;

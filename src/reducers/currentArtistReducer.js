const currentArtistReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_ARTIST_INFO':
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default currentArtistReducer;

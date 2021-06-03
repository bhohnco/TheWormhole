const topArtistsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_TOP_ARTIST_DATA':
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default topArtistsReducer;

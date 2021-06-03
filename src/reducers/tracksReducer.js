const topTracksReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_TOP_TRACKS_DATA':
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default topTracksReducer;

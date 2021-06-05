const dropdownReducer = (state = false, action) => {
  switch(action.type) {
    case 'GET_TOP_ARTIST_DATA':
      state = action.payload;
    case 'GET_TOP_TRACKS_DATA':
      state = action.payload;
      return state
    default:
      return state
  }
}
export default dropdownReducer;

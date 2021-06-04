const imageReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_ARTIST_IMAGE_URL':
      state.push(action.payload);
      return state;
    default:
      return state;
  }
}

export default imageReducer;
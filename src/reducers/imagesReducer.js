const imagesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_ARTIST_IMAGE_LINKS':
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default imagesReducer;
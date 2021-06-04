const locationReducer = (state = 'Ireland', action) => {
  switch(action.type) {
    case 'GET_LOCATION':
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default locationReducer;
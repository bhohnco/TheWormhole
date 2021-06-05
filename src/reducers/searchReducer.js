
const searchReducer = (state = [], action) => {
  switch(action.type) {
    case 'DATA_SEARCHED':
      state = action.payload;
      return state;
default:
  return state
}
}

export default searchReducer;

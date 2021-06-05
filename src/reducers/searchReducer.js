const searchReducer (state = [], action) => {
  switch(action.type) {
    case 'DATA_SEARCHED':
      return {: action.payload}
default:
  return state
}
}

export default searchReducer;
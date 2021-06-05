const searchReaducer (state = [], action) => {
  switch(action.type) {
case 'DATA_SEARCHED':
return {filteredJokes: action.payload}
default:
return state
}
}
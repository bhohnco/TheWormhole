const searchReaducer (state = [], action) => {
  switch(action.type) {
case 'DATA_SEARCHED':
return { filteredArtists : action.payload }
default:
return state
  }
}